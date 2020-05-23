// hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';

// hooks
import isPortrait from '../../hooks/isPortrait';

// helpers
import calcClipHeight from '../../helpers/calcClipHeight';
import toUnits from '../../helpers/toUnits';

const getStyle = (remove, src, windowWidth, windowHeight, clip, aspectRatio, scroll, shift) => {
    // Scale the height using the aspect ratio of the background image
    const height = ((aspectRatio > 1) ? windowHeight : (windowWidth / aspectRatio)) + 2 * clip;

    // Attach units
    const margin = toUnits(-0.5 * clip, "px");
    const delta = toUnits(clip, "px");
    const H = toUnits(height, "px");

    return {
        height: H,
        backgroundAttachment: scroll ? 'scroll' : 'fixed',
        backgroundImage: `url(${ src })`,
        marginTop: remove ? 0 : (shift ? margin : 0),
        clipPath: remove ? 'none' : `polygon(0 ${ delta }, 100% 0, 100% calc(${ H } - ${delta}), 0 ${ H })`
    }
}

const PictureDivider = ({ src, aspectRatio, shift, scroll, windowWidth, windowHeight }) => {
    const clip = calcClipHeight(windowWidth);
    const remove = isPortrait();
    
    return (
        <div className="picture-divider" style={ getStyle(remove, src, windowWidth, windowHeight, clip, aspectRatio, scroll, shift) } />
    );
};

export default withWindowDimensions(restrictToClient(PictureDivider));

