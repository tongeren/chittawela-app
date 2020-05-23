import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const Contact = ({ heading, list }) => {
    console.log("Contact: heading, list", heading, list);
    return (
        <div className="contact">
            <p className="contact__question">{ heading }</p>
            <ul className="contact__list">
               { list.map((item, key) => <ContactItem key={ key } { ...item } /> ) } 
            </ul>
        </div>
    );
};

export default Contact;

Contact.propTypes = {
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            iconClasses: PropTypes.string.isRequired,
            recaptcha: PropTypes.bool.isRequired,
            contactInfo: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};



