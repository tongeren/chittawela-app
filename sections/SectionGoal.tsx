import CenterBox from '../components/CenterBox/CenterBox';
import LinkButton from '../components/LinkButton/LinkButton';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import Video from '../components/Video/Video';

const SectionGoal = ():React.ReactElement => 
    <Section id="section-goal">
        <SectionLayout
            heading={
                <SectionHeading 
                    title="My goal is to equip you with the guidance and tools to create a happy life"
                    subtitle="Understanding your true self will lead you to embark on a meaningful, fulfilling and ultimately happy life's mission " 
                    color="gold"
                    align="center"
                    margin="medium"
                />
            }
        >
            <CenterBox>
                <Video src="https://player.vimeo.com/video/395625673" />
            </CenterBox>
            <SectionHeading 
                alt
                title="Be one of the 12 applicants invited to attend:"
                align="center"
                margin="small"
            />
            <CenterBox>
                <LinkButton href="#section-book" text="Apply today" />
            </CenterBox>
        </SectionLayout>
    </Section>;

SectionGoal.displayName = "SectionGoal";

export default SectionGoal;