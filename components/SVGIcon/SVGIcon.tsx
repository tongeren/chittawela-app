import SVG from '../SVG/SVG';
import { SVGIconProps } from './types';

const SVGIcon:React.FunctionComponent<SVGIconProps> = ({ classes, sprite }):React.ReactElement => {
    return (
        <div className="svg-icon">
            <SVG classes={ "svg-icon__svg".concat(" ", classes ? classes : "") } sprite={ sprite } />
        </div>
    );
};

export default SVGIcon;

// SVGIcon.propTypes = {
//     // entered: PropTypes.bool,
//     sprite: PropTypes.string.isRequired,
//     classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
// };
