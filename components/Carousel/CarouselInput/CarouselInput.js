import PropTypes from 'prop-types';

const CarouselInput = ({ number }) => {
    return (
        <input 
            type="radio" 
            className="carousel__radio" 
            name="radio" 
            id={ `slide-${ number }` } 
            defaultChecked={ (number === 1) ? true : false } 
        />
    );
};

export default CarouselInput;

CarouselInput.propTypes = {
    number: PropTypes.number.isRequired
};