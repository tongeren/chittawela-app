import { Fragment } from 'react';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionLocation = ():React.ReactElement => 
    <Section id="section-location">
        <SectionLayout
            bottomMargin
            heading={
                        <SectionHeading 
                            title=" Did I mention that we'll be meeting at a four-star luxury beachfront resort in the tropical island of Samui, Thailand?"
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <Fragment>
                <p className="paragraph">
                    <strong>I'm hosting this private retreat in the luxury island of Samui, a truly exquisite location in Thailand.</strong>
                </p>
                <p className="paragraph">
                    You fly into a privately owned international airport that after landing will give you the relaxing feeling of being in a retreat already. From there you will be transferred to one of the most soothing resorts of Samui, located in a secluded and exclusive
                    part of the island: Banburee Resort & Spa.
                </p>
                <p>
                    This beautiful resort flows gently downward towards the Bay of Thailand and offers breathtaking sunset views of the Five Islands.
                </p>
            </Fragment>
        </SectionLayout>
    </Section>

SectionLocation.displayName = "SectionLocation";

export default SectionLocation;