import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import CenterBox from '../components/CenterBox/CenterBox';
import LinkButton from '../components/LinkAnchor/LinkAnchor';
import Photo from '../components/Photo/Photo';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionFoundation = ():React.ReactElement => 
    <Section id="section-foundation">
        <SectionLayout
            topMargin
            heading={
                        <SectionHeading 
                            title="Master yourself, embrace your soul, and harness its infinite powers"
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <BoxLayout 
                text={
                        <Fragment>
                            <h3 className="heading-tertiary u-margin-bottom-tiny">
                                Are you keen to embark on this journey of self-discovery with me?
                            </h3>
                            <p className="paragraph">
                                You will have have <strong>one full week</strong> with an <strong>expert in mind-body balancing</strong> who will <strong>personally</strong> and in <strong>one-to-one coaching sessions</strong> walk with you in discovering and nurturing your soul, and work with you in creating a life <strong>abound in purpose and meaning</strong>.
                            </p>
                            <p className="paragraph">
                                I will be with you <strong>privately</strong> to give you my input and advise on your vision, and guide you how to best make it a reality, something that is simply not possible in group environments alone.
                            </p>
                            <p className="paragraph">
                                I will be able to draw from <strong>my copious life experience</strong> and share you the realizations I had and wisdom I gained during my own journey.
                            </p>
                            <p className="paragraph">
                                During our <strong>holistic massage coaching sessions</strong> you will notice that I am a <strong>master at setting you at ease</strong>. This combined with the fact that I am <strong>able to deeply connect</strong> with your inner self, <strong>simplifies</strong> the process of you connecting with yourself even more.
                            </p>
                            <p className="paragraph">
                                This in turn makes it <strong>easier</strong> to choose the <strong>right path</strong> for yourself, one that <strong>excites and energizes</strong> you.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-tiny">
                                I strongly believe that we ultimately <strong>yearn for happiness</strong>, a state which we obtain if we <strong>truly align ourselves with our inner being</strong>.
                            </h3>
                            <p className="paragraph">
                                I will help you create <strong>balance and harmony in all areas of your life</strong>. I will teach you techniques to cultivate <strong>greater personal awareness</strong> and how to work with your inner self, which together with our follow-up will help you <strong>keep on track towards your goals after your retreat</strong>.
                            </p>
                            <p className="u-margin-bottom-small">
                                All you have to do is <span>TAKE ACTION</span> - and get the personal guidance, mentorship and support you need to <strong>fulfill your potential</strong> and create the life of your dreams.
                            </p>
                            <CenterBox>
                                <LinkButton href="/#sanctuary" text="Apply to attend" />
                            </CenterBox>
                        </Fragment>
                    }
                other={
                        <Photo 
                            media="" 
                            srcSet="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/foundation/philippe.jpg 1920w" 
                            sizes="100vw" 
                            src="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_852/v1584329960/foundation/philippe.jpg" 
                            alt="Philippe & Wiphatthra"
                            name="foundation"
                        />
                    }
            />
        </SectionLayout>
    </Section>;

SectionFoundation.displayName = "SectionFoundation";

export default SectionFoundation;