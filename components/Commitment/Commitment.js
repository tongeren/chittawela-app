import PropTypes from 'prop-types';

const Commitment = ({ icon, heading, text }) => {
    return (
        <div className="commitment-layout">
            <div className="commitment-layout__icon">{ icon }</div>
            <div className="commitment-layout__text">
                <h3 className="commitment-layout__header heading-secondary-alt">
                    <span>{ heading }</span>
                </h3>
                <p className="commitment-layout__paragraph">- { text }</p>
            </div>
        </div>
    );
};

export default Commitment;

Commitment.propTypes = {
    icon: PropTypes.element.isRequired,
    heading: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired
};