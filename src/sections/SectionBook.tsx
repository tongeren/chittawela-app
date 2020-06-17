import dynamic from 'next/dynamic';
import Loading from '../components/Loading/Loading';
import ActionForm from '../components/ActionForm/ActionForm';
import Contact from '../components/Contact/Contact';
import PhotoSection from '../components/PhotoSection/PhotoSection';
const SectionLayout = dynamic(
    () => import('../components/SectionLayout/SectionLayout'), 
    { loading: () => <Loading />, ssr: false }
);

import ResponsiveHeading from '../components/ResponsiveHeading/ResponsiveHeading';
import BookLayout from '../components/BookLayout/BookLayout';
import AlignTopBottom from '../components/AlignTopBottom/AlignTopBottom';

const CONTACT_INFO = [
    {
        "iconClasses": "fas fa-phone",
        "recaptcha": false,
        "contactInfo": "+66 97 918 3180"
    },
    {
        "iconClasses": "fab fa-whatsapp",
        "recaptcha": false,
        "contactInfo": "+66 97 918 3180"
    },
    {
        "iconClasses": "far fa-envelope",
        "recaptcha": true,
        "contactInfo": "wiphatthra@chittawela.com"
    }
];

const ACTION_FORM_LIST = [
    {
        "id": "contact-name", 
        "name": "name", 
        "inputType": "text", 
        "hint": "Your full name as you like to be addressed", 
        "placeholder": "Your full name"
    },
    {
        "id": "contact-email", 
        "name": "email", 
        "inputType": "email", 
        "hint": "Your E-mail address where we can reach you on", 
        "placeholder": "Your E-mail address"
    }
];

const SectionBook = ():React.ReactElement => 
    <PhotoSection id="section-book"> 
        <SectionLayout>
            <BookLayout
                left={
                    <AlignTopBottom 
                        first={
                            <ResponsiveHeading 
                                alt 
                                title="We purposely limit the number of participants to 12 people only, in order to give everyone a very personal experience."
                                subtitle="All our retreats sell out - I expect this one to be the same."
                                margin="small"
                            />
                        }
                        last={
                            <Contact 
                                heading="If you have any questions, then feel free to contact us here:" 
                                list={ CONTACT_INFO } 
                            />                    
                        }
                    />
                }
                right={
                    <AlignTopBottom
                        first={
                            <ResponsiveHeading 
                                alt 
                                title="Yes! I am ready. Get me a FREE consultation." 
                                margin="small"
                            />
                        }
                        last={
                            <ActionForm 
                                caption="Please provide us with a little information about yourself so we can arrange a Skype call with your guide - so you can find out whether we are a match for you."
                                list={ ACTION_FORM_LIST }
                            />
                        }
                    />
                }
            />    
        </SectionLayout>
    </PhotoSection>

SectionBook.displayName = "SectionBook";

export default SectionBook;