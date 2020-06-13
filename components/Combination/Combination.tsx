import SVGIcon from '../SVG/SVG';
import { CombinationProps } from './types';

const Combination:React.FunctionComponent<CombinationProps> = ({ sprite, text }):React.ReactElement => {
    return (
        <div className="combination">
            <div className="combination__disc">
                <SVGIcon sprite={ sprite } classes="combination__icon" />
            </div>
            <div className="combination__text u-text-center">
                <span>{ text }</span>
            </div>
        </div>
    );
};

Combination.displayName = "Combination";

export default Combination;