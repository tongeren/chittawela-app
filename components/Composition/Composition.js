import PropTypes from 'prop-types';

const Composition = ({ photo1, photo2, photo3 }) => {
    return (
        <div className="composition-layout">
            <div className="composition-layout__photo">{ photo1 }</div>
            <div className="composition-layout__photo">{ photo2 }</div>
            <div className="composition-layout__photo">{ photo3 }</div>
        </div>
    );
};

export default Composition;

Composition.propTypes = {
    photo1: PropTypes.element.isRequired,
    photo2: PropTypes.element.isRequired,
    photo3: PropTypes.element.isRequired
};