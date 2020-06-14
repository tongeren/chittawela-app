import ClientExperience from '../components/ClientExperience/ClientExperience';
import FlexColLayout from '../components/FlexColLayout/FlexColLayout';
import Section from '../components/Section/Section';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import Testimonial from '../components/Testimonial/Testimonial';
import Transformation from '../components/Transformation/Transformation';

const PHOTOS = [
    {
        "before": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/before_300x300.jpg",
            "alt": "Before",
            "name": "testimonials"
        },
        "after": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/after_300x300.jpg",
            "alt": "After",
            "name": "testimonials"
        }
    },
    {
        "before": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/before_300x300.jpg",
            "alt": "Before",
            "name": "testimonials"
        },
        "after": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/after_300x300.jpg",
            "alt": "After",
            "name": "testimonials"
        }
    },
    {
        "before": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/before_300x300.jpg",
            "alt": "Before",
            "name": "testimonials"
        },
        "after": {
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_300/v1586672896/testimonials/after_300x300.jpg",
            "alt": "After",
            "name": "testimonials"
        }
    }
];

const INFO = [
    {
        "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus tempore ipsa ullam, nesciunt maxime ab dolore quis dignissimos hic mollitia dolorem quo qui, ducimus et quas voluptatum animi repudiandae vero! Id est optio vero, voluptates impedit explicabo eius soluta totam doloribus maxime repellendus, provident dolores aliquid, atque nobis repellat quidem. Eligendi necessitatibus amet inventore nemo ipsa quasi atque quas?",
        "name": "Mery Trisnawati",
        "job": "Accountant",
        "city": "Denpasar",
        "country": "Indonesia"
    },
    {
        "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus tempore ipsa ullam, nesciunt maxime ab dolore quis dignissimos hic mollitia dolorem quo qui, ducimus et quas voluptatum animi repudiandae vero! Id est optio vero, voluptates impedit explicabo eius soluta totam doloribus maxime repellendus, provident dolores aliquid, atque nobis repellat quidem. Eligendi necessitatibus amet inventore nemo ipsa quasi atque quas?",
        "name": "Mery Trisnawati",
        "job": "Accountant",
        "city": "Denpasar",
        "country": "Indonesia"
    },
    {
        "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus tempore ipsa ullam, nesciunt maxime ab dolore quis dignissimos hic mollitia dolorem quo qui, ducimus et quas voluptatum animi repudiandae vero! Id est optio vero, voluptates impedit explicabo eius soluta totam doloribus maxime repellendus, provident dolores aliquid, atque nobis repellat quidem. Eligendi necessitatibus amet inventore nemo ipsa quasi atque quas?",
        "name": "Mery Trisnawati",
        "job": "Accountant",
        "city": "Denpasar",
        "country": "Indonesia"
    }
];

const n = PHOTOS.length;

const testimonials = [];
for (let i = 0; i < n; i++) {
    testimonials.push({
            "photos": PHOTOS[i],
            "info":   INFO[i]
    });
}

const SectionTestimonials = ():React.ReactElement => {  
    return (
        <Section id="section-testimonials">
            <SectionLayout blue>
                <FlexColLayout>
                    { testimonials.map((testimonial, key) =>
                    <Testimonial
                        key={ key }
                        transformation={
                            <Transformation { ...testimonial.photos } />
                        }
                        experience={
                            <ClientExperience { ...testimonial.info } /> 
                        }
                    />
                    )}
                </FlexColLayout>
            </SectionLayout>
        </Section>
    );
};

export default SectionTestimonials;