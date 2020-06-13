import SVG from '../SVG/SVG';
import { SVGIconProps } from './types';

const SVGIcon:React.FunctionComponent<SVGIconProps> = ({ classes, sprite }):React.ReactElement => {
    return (
        <div className="svg-icon">
            <SVG classes={ "svg-icon__svg".concat(" ", classes ? classes : "") } sprite={ sprite } />
        </div>
    );
};

SVGIcon.displayName = "SVGIcon";

export default SVGIcon;