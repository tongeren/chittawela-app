import SVGIcon from '../SVGIcon/SVGIcon';
import { SVGButtonProps } from './types';

const SVGButton:React.FunctionComponent<SVGButtonProps> = ({ classes, sprite, url }):React.ReactElement => {
    // TO DO: add hover behaviour with React Hooks
    const button = classes ? classes.concat(" ", "svg-button") : "svg-button";

    return (
        <button className={ button } onClick={ () => window.location.href=url.toString() }>
            <SVGIcon sprite={ sprite } />
        </button>
    );
};

export default SVGButton;

// SVGButton.propTypes = {
//     classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     sprite: PropTypes.string.isRequired
// };