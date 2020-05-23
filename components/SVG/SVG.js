import PropTypes from 'prop-types'; 

const SVG_SPRITE_SHEET_LOCATION = "img/svg/icon-defs.svg";

const SVG = ({ sprite, classes }) => {
    return (
        <svg className={ classes } aria-label={ sprite } > 
            <use href={ SVG_SPRITE_SHEET_LOCATION.concat("#", sprite) }></use>       
        </svg>
    );
};

export default SVG;

SVG.propTypes = {
    sprite: PropTypes.string.isRequired,
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

