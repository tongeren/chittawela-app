import React from 'react';
import Picture, { IPictureCSR } from '../PictureCSR/PictureCSR';

export interface ICrossfade {
    crossfade: IPictureCSR[]
}

const Crossfade: React.FunctionComponent<ICrossfade> = ({ crossfade }): React.ReactElement => {
    return (
        <div className="crossfade">
            { crossfade.map((picture, key) => {
                const { sources, image } = picture;
                return <Picture key={ key } classes="crossfade__img" sources={ sources } image={ image } />;
            })}
        </div>
    );
};

Crossfade.displayName = "Crossfade";

export default Crossfade;

