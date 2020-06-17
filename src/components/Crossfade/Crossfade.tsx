// import dynamic from 'next/dynamic';
// import Loading from '../Loading/Loading';
import PictureWithHeight from '../PictureWithHeight/PictureWithHeight';
import { IPictureWithHeight } from '../PictureWithHeight/PictureWithHeight';
// const PictureWithHeight = dynamic( 
//     () => import('../PictureWithHeight/PictureWithHeight'),
//     { ssr: false }
// );

export interface ICrossfade {
    crossfade: IPictureWithHeight[]
}

const Crossfade: React.FunctionComponent<ICrossfade> = ({ crossfade }): React.ReactElement => {
    return (
        <div className="crossfade">
            { crossfade.map((picture, key) => {
                const { sources, image } = picture;
                return <PictureWithHeight key={ key } classes="crossfade__img" sources={ sources } image={ image } />;
            })}
        </div>
    );
};

Crossfade.displayName = "Crossfade";

export default Crossfade;

