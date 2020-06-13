import { CompositionProps } from './types';

const Composition:React.FunctionComponent<CompositionProps> = ({ photo1, photo2, photo3 }):React.ReactElement => {
    return (
        <div className="composition-layout">
            <div className="composition-layout__photo">{ photo1 }</div>
            <div className="composition-layout__photo">{ photo2 }</div>
            <div className="composition-layout__photo">{ photo3 }</div>
        </div>
    );
};

Composition.displayName = "Composition";

export default Composition;