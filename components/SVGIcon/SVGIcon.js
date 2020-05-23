import PropTypes from 'prop-types'; 
import SVG from '../SVG/SVG';

const SVGIcon = ({ sprite, classes }) => {
    return (
        <div className="svg-icon">
            <SVG classes={ "svg-icon__svg".concat(" ", classes ? classes : "") } sprite={ sprite } />
        </div>
    );
};

export default SVGIcon;

SVGIcon.propTypes = {
    // entered: PropTypes.bool,
    sprite: PropTypes.string.isRequired,
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
