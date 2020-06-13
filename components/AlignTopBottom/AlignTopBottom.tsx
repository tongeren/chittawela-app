import { AlignTopBottomProps } from './types';

const AlignTopBottom:React.FunctionComponent<AlignTopBottomProps> = ({ first, last }):React.ReactElement => {
    return (
        <div className="align-top-bottom-layout">                 
            <div className="align-top-bottom-layout__first">{ first }</div> 
            <div className="align-top-bottom-layout__last">{ last }</div> 
        </div>
    );
};

AlignTopBottom.displayName = "AlignTopBottom";

export default AlignTopBottom;