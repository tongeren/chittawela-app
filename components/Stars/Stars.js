import PropTypes from 'prop-types';
import Star from './Star/Star';

const Stars = ({ number }) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
        stars.push(<Star key={ i } />);
    };

    return (
        <span>{ stars }</span>
    );
};

export default Stars;

Stars.propTypes = {
    number: PropTypes.number.isRequired
};