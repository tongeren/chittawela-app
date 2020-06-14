import { TestimonialProps } from './types';

const Testimonial:React.FunctionComponent<TestimonialProps> = ({ transformation, experience }):React.ReactElement => {
    return (
        <div className="testimonial">
            <div className="testimonial__transformation">
                { transformation }
            </div>
            <div className="testimonial__client-experience">
                { experience }
            </div>
        </div>
    );
};

export default Testimonial;