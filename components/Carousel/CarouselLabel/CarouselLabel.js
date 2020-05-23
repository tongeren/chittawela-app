import PropTypes from 'prop-types';

const CarouselLabel = ({ group, number, children }) => {
    return (
        <label 
            className={ `carousel__${ group }-btn` } 
            htmlFor={ `slide-${ number }` }
        >
            { children }
        </label>
    );
};

export default CarouselLabel;

CarouselLabel.propTypes = {
    number: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired, // "quick", "prev", "next", "photo"
    children: PropTypes.element
};