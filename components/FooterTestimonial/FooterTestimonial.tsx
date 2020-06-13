import SectionLayout from '../SectionLayout/SectionLayout';
import ClientExperience from '../ClientExperience/ClientExperience';

const EXPERIENCE = {
    "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus tempore ipsa ullam, nesciunt maxime ab dolore quis dignissimos hic mollitia dolorem quo qui, ducimus et quas voluptatum animi repudiandae vero! Id est optio vero, voluptates impedit explicabo eius soluta totam doloribus maxime repellendus, provident dolores aliquid, atque nobis repellat quidem. Eligendi necessitatibus amet inventore nemo ipsa quasi atque quas?",
    "name": "Jos Knoote",
    "job": "President Ink Invent B.V.",
    "city": "The Hague",
    "country": "The Netherlands"
};

const FooterTestimonial = ():React.ReactElement => {
    return (
        <SectionLayout>
            <ClientExperience { ...EXPERIENCE } />
        </SectionLayout>
    );
};

FooterTestimonial.displayName = "FooterTestimonial";

export default FooterTestimonial;