import PropTypes from 'prop-types';

const Testimonial = ({ transformation, clientExperience }) => {
    return (
        <div className="testimonial">
            <div className="testimonial__transformation">
                { transformation }
            </div>
            <div className="testimonial__client-experience">
                { clientExperience }
            </div>
        </div>
    );
};

export default Testimonial;

Testimonial.propTypes = {
    transformation: PropTypes.element.isRequired,
    clientExperience: PropTypes.element.isRequired
};
