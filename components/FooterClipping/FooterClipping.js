// hooks
import isPortrait from '../../hooks/isPortrait';
// hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';
// helpers
import calcClipHeight from '../../helpers/calcClipHeight';
import toUnits from "../../helpers/toUnits";

const getStyle = (remove, height) => {
    const H = toUnits(height, "px");

    return remove ? { display: 'none' } 
                    : {
                        height: H, 
                        clipPath: `polygon(0 ${ H }, 100vw 0, 100vw ${ H })`
                      }; 
};

const FooterClipping = ({ windowWidth }) => {
    const height = calcClipHeight(windowWidth);
    const remove = isPortrait();

    return (
        <div 
            id="footer-clipping" 
            className="footer-clipping" 
            style={ getStyle(remove, height) }
        />
    )
};

export default withWindowDimensions(restrictToClient(FooterClipping));

