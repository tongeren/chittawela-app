import { Fragment } from 'react';
import Application from '../components/Application/Application';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayoutCSR from '../components/SectionLayoutCSR/SectionLayoutCSR';

const SectionDescription = ():React.ReactElement => 
    <Section id="section-description">
        <SectionLayoutCSR bottomMargin> 
            <BoxLayout
                firstText
                text={
                    <Fragment>
                        <SectionHeading 
                            title="Let 2021 be remembered as the year you changed."
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                        <div className="u-text-center">
                            <p className="paragraph">
                                Join me for a well-deserved 7 days & 7 nights at a <strong>soothing 4-star resort</strong> in <strong>beautiful Koh Samui</strong> on March 2-8th - and get the <strong>intensive one-on-one private mentorship</strong> you need to gain the insights and skills to transition to a more fulfilling life.
                            </p>
                            <p>
                                I realize that a real transformation cannot be accomplished in one week only, that is why I ask you to prepare for our retreat beforehand, and that is also the reason you will receive an <strong>additional 3 two-monthly 30min Skype sessions</strong>  afterwards, in order to assist and optimize your transition to your new self.
                            </p>
                        </div>
                    </Fragment>
                }
                other={ 
                    <Application 
                        sprite="star"
                        header="Only 12 spots available"
                        cta="Is one of them yours?"
                        buttonText="Apply now"
                        href="#section-goal"
                    />
                }
            />    
        </SectionLayoutCSR>
    </Section>;

SectionDescription.displayName = "SectionDescription";

export default SectionDescription;