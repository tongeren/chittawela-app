import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardLayout = ({ cards }) => {
    return (
        <div className="card-layout">
             { cards.map((card, key) => <Card key={ key } { ...card } /> )}
        </div>
    );
};

export default CardLayout;

CardLayout.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            period: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            photo: PropTypes.shape({
                media: PropTypes.string.isRequired,
                srcSet: PropTypes.string.isRequired,
                sizes: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                sectionName: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    ).isRequired
};