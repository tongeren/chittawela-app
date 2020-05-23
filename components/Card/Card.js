import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';

const Card = ({ period, title, photo, description }) => {
    return (
        <div className="card">
            <h3 className="card__period heading-secondary-alt">{ period }</h3>
            <h3 className="card__header heading-tertiary-alt">{ title }</h3>
            <div className="card__photo">
                <Photo { ...photo } />
            </div> 
            <p className="card__description">{ description }</p>
       </div>
    );
};

export default Card;

Card.propTypes = {
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.shape({
        media: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        sectionName: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired
};

