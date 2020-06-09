import ContactItem from './ContactItem/ContactItem';
import { ContactProps } from './types';

const Contact:React.FunctionComponent<ContactProps> = ({ heading, list }):React.ReactElement => {
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





