import { ContactItemProps } from './types';

const ContactItem:React.FunctionComponent<ContactItemProps> = ({ iconClasses, recaptcha, contactInfo }):React.ReactElement => {

    const classes = {
        "icon": "contact__icon".concat(" ", iconClasses),
        "span": "contact__telephone".concat(" ", recaptcha ? "contact__recaptcha" : "contact__no-recaptcha")
    };

    return (
        <li className="contact__item">
            <i className={ classes.icon }></i>
            <span className={ classes.span }>{ contactInfo }</span>
        </li>
    );
};

ContactItem.displayName = "ContactItem";

export default ContactItem;