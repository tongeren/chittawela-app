import PropTypes from 'prop-types';

const ClientExperience = ({ text, name, job, city, country }) => {
    return (
        <div className="client-experience">
            <div className="client-experience__text paragraph">
                <p>{ text }</p>
            </div>
            <span><strong>{ name }</strong></span><br />
            <span>{ job }, { city } - { country }</span>
        </div>
    );
};

export default ClientExperience;

ClientExperience.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};