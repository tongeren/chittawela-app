
import { Fragment } from 'react';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionSelection = ():React.ReactElement => 
    <Section id="section-selection">
        <SectionLayout
            heading={
                        <SectionHeading 
                            title="Only 12 carefully selected participants may attend"
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <Fragment>
                <p className="paragraph">
                    This intimate retreat is designed to give you plenty of one-on-one time with me, which will allow me to accompany you on your journey to actualize yourself and support you with your inner growth in a personal, safe, and sheltered way. For this reason
                    I like to keep the group size small, yet big enough to capitalize on the synergistic effects that feelings as passion, inspiration and enthousiasm have on the overall quality and extent of people's results.
                </p>
                <p className="paragraph">
                    My years of experience in coaching and guiding of international clients have shown me that 12 people and 7 days is the optimum combination of number of participants and duration of the retreat to maximize your outcome. Unfortunately, that means that there
                    are usually more people who would like to go than there are spaces available.
                </p>
                <p className="paragraph">
                    That's why I ask you to contact us for a consultation to find out whether we are a match. We'll consider your application carefully to ensure the highest quality experience for all participants.
                </p>
                <p className="paragraph">
                    <strong>Only those applicants who are willing to fully apply themselves to effectuate personal change - and who will also benefit the group - will be accepted.</strong>
                </p>
                <p className="paragraph">
                    If have dedicated my life to all the courageous men and women - young and older - who dare live confidently outside of their comfort zone, that blocks them from exploring their possibilities and realizing their true power to create the life of their dreams.
                </p>
                <p className="paragraph">
                    <strong>So if you're genuinely want to change your life, discover your true potential, and effect the positive impact you were supposed to make on this world, then I strongly encourage you to apply.</strong>
                </p>
            </Fragment>
        </SectionLayout>
    </Section>

SectionSelection.displayName = "SectionSelection";

export default SectionSelection;