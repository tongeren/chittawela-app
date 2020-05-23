import { Fragment } from 'react';
import CenterBox from '../components/CenterBox/CenterBox';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionGroup = () => 
    <Section id="section-group">
        <SectionLayout
            marginTop
            marginBottom
            heading={
                        <SectionHeading 
                            title="Seven uplifting days in the company of other high achievers, surrounded by positive energy"
                            align="center"
                            color="gold"
                            margin="medium"
                        />
                    }
        >
           <Fragment>
                <h3 className="heading-secondary-alt u-margin-bottom-small u-text-center">
                    My retreats attract an extremely high caliber of attendees.
                </h3>
                <p className="paragraph">
                    These are the people who are already successful and willing to take <strong>serious leaps</strong> in their careers, their personal lives, and the extend of their impact that they're making on the world. They're the courageous few
                    who dare to take personal risk to break free of social and cultural expectations and pressures,and <strong>venture into the unknown to experience and realize their true personality and potential</strong>. When you surround yourself
                    with such <strong>motivated, energized, and driven people</strong>, you tap into the power of the group and become more energized and powerful yourself.
                </p>
                <p className="u-margin-bottom-medium">
                    <strong>There's no limit in what you can accomplish with ther support and encouragement of such incredible people!</strong>
                </p>
                <CenterBox>
                    <a href="" className="button button--white-orange">Consult us</a>
                </CenterBox>
           </Fragment>
        </SectionLayout>
    </Section>

export default SectionGroup;