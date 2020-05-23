import SVGIcon from '../SVGIcon/SVGIcon';
import PropTypes from 'prop-types';

const SVGButton = ({ classes, sprite }) => {
    // TO DO: add hover behaviour with React Hooks
    const button = classes ? classes.concat(" ", "svg-button") : "svg-button";

    return (
        <button className={ button } >
            <SVGIcon sprite={ sprite } />
        </button>
    );
};

export default SVGButton;

SVGButton.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    sprite: PropTypes.string.isRequired
};