import SVGIcon from '../SVGIcon/SVGIcon';
import { SVGButtonProps } from './types';

const SVGButton:React.FunctionComponent<SVGButtonProps> = ({ classes, sprite, url }):React.ReactElement => {
    const button = classes ? classes.concat(" ", "svg-button") : "svg-button";

    return (
        <button className={ button } onClick={ () => window.location.href = url.toString() }>
            <SVGIcon sprite={ sprite } />
        </button>
    );
};

SVGButton.displayName = "SVGButton";

export default SVGButton;