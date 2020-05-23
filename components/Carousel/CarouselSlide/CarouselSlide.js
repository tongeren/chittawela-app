import PropTypes from 'prop-types';
import Photo from '../../Photo/Photo';

const CarouselSlide = ({ photo }) => {
    return (
        <div className="carousel__slide">
            <div className="carousel__photo">
                <Photo { ...photo } />            
            </div>
        </div>
    );
};

export default CarouselSlide;

CarouselSlide.propTypes = {
    photo: PropTypes.shape({
        media: PropTypes.string,
        srcSet: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        sectionName: PropTypes.string.isRequired
    }).isRequired
};