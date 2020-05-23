// CLIENT-SIDE ONLY
import PropTypes from 'prop-types';
// hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';
// hooks
import isPortrait from '../../hooks/isPortrait';
// helpers
import calcClipHeight from '../../helpers/calcClipHeight';
import toUnits from '../../helpers/toUnits';

const getStyle = (dontClip, height, clip, shiftTop, shiftBottom) => {
    const H = toUnits(clip, "px");

    // Only shift down when asked
    const marginBottom = shiftBottom ? H : 0;
    const marginTop = shiftTop ? H : 0;

    return dontClip ? { height: 'inherit' } 
                    : {
                        height: `calc(${ height } + ${ H })`,
                        marginTop: `calc(-0.5 * ${ marginTop })`,
                        marginBottom: `calc(-0.5 * ${ marginBottom })`
                    };
};

const Divider = ({ id, title, subtitle, large, shiftTop, shiftBottom, windowWidth }) => {
    // Check whether extra props have been set
    const isLarge = (large);
    const hasSubtitle = (subtitle);

    // Calculate the hight of the clipping
    const clip= calcClipHeight(windowWidth);

    // calculate the height of the divider
    const height = toUnits(2 + (isLarge ? 4 : 0) +  (hasSubtitle ? 2 : 0), "rem");

    // Determine whether we are in 'portrait ' mode
    const dontClip = isPortrait();

    // Define styles
    const style = getStyle(dontClip, height, clip, shiftBottom, shiftTop)

    const subtitleJSX = <div className="divider__subtitle">
                            <em>{ subtitle }</em>
                        </div>;

    return (
        <div className="divider" style={ style } id={ id }>
            <div className="divider__title">
                <h2 className="heading-secondary" >{ title }</h2>
                { hasSubtitle ? subtitleJSX : null }
            </div>
        </div>
    );
}

export default withWindowDimensions(restrictToClient(Divider));

Divider.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    large: PropTypes.bool,
    shift: PropTypes.bool,
    subtitle: PropTypes.string
}

 
