import Avatar from '../components/Avatar/Avatar';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionOpportunity = () => 
    <Section id="section-opportunity">
        <SectionLayout
            marginBottom
            marginTop
            heading={
                        <SectionHeading 
                            title="This is your opportunity to start living life authentically"
                            color="gold"
                            align="center"
                            margin="small"
                        />
                    }
        >
            <Container>
                <Avatar 
                    src="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_500/v1584530055/opportunity/wiphatthra-avatar.jpg"
                    alt="Wiphatthra"
                    margin="small"
                />
            </Container>
            <SectionHeading
                alt
                title="The inner work we achieve together in our sanctuary will help you create a life full of quality, filled with greater passion and purpose, and a deeper sense of fulfillment."
                align="center"
                margin="medium"
            />
            <ul className="list u-margin-bottom-small">
                <li className="list__item">
                    If you've <strong>recently realized that you need to work on your inner self</strong> in order to improve your quality of life, and you're <strong>serious about making a a big change in your life</strong>...
                </li>
                <li className="list__item">
                    If you're <strong>looking for more fulfillment</strong>, and want to get to know your true self so you can <strong>go after the things you really want</strong>, with more passion, drive and confidence..
                </li>
                <li className="list__item">
                    If you want get to next step in your career, earn more money, but at the same time <strong>be more happy</strong>, more aware, and stay more balanced...
                </li>
                <li className="list__item">
                    If you're <strong>searching a safe environment with a trustworthy soul supporter</strong> and life transformational coach, who will accompany you on your journey to your true self, <strong>on your spirititual level, without being religious</strong> or anything like that...
                </li>
            </ul>
            <h2 className="heading-secondary-alt u-text-center u-margin-bottom-small">
                ...I will be with you every step of the way!
            </h2>
            <p className="u-text-center">
                If you're ready to take action on to understand your deepest self, and connect with your most profound dreams, and are committed to create the inspiring and remarkable life you were destined for, then I encourage you to fill out the personal application
                form and to work with me in person.
            </p>
        </SectionLayout>
    </Section>;

export default SectionOpportunity;