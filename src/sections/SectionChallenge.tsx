import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Divider from '../components/Divider/Divider';
import Photo from "../components/Photo/Photo";
import Section from '../components/Section/Section';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionChallenge = ():React.ReactElement => 
    <Section id="section-challenge">
        <Divider    
            title="Connect to your heart and reach your full potential"
            subtitle="Let me show you how to listen to your inner self and re-experience its unlimited inner strength and knowledge"
        />
        <SectionLayout blue>
            <BoxLayout
                firstText
                text={
                        <Fragment>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Do you feel your life is on autopilot? Are you looking for direction, passion and meaning?
                            </h3>
                            <p className="paragraph">
                                Maybe from the outside you look succesful, but you still <strong>feel empty and unfulfilled</strong>.
                            </p>
                            <p className="paragraph">
                                Maybe you haven't been able to take the next step in your career. You have been looking for ways to <strong>push through that barrier</strong>.
                            </p>
                            <p className="paragraph">
                                Maybe you <strong>lost hope and faith</strong> to be open and kind, and it seems you cannot rewind that feeling of inner balance.
                            </p>
                            <p>
                                Or maybe you <strong>struggle with relationships</strong>, you have <strong>unhealthy coping methods</strong>, or you often <strong>feel overwhelmed</strong> when you slow down, and you just <strong>want to change</strong>.
                            </p>
                            <h3 className="heading-tertiary u-margin-top-medium">
                                Whatever is close to your soul, you can set your mind to achieve, and we would love to assist you with that.
                            </h3>
                        </Fragment>
                    }
                other={ 
                        <Photo 
                            media="" 
                            srcSet="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/challenge/meditating.jpg 1920w" 
                            sizes="100vw"
                            src="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_620/v1584329960/challenge/meditating.jpg" 
                            alt="Wiphatthra meditating"
                            name="challenge"
                        /> 
                    }
            />
        </SectionLayout>
    </Section>;

SectionChallenge.displayName = "SectionChallenge";

export default SectionChallenge;