import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Photo from '../components/Photo/Photo';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionInvitation = ():React.ReactElement => 
    <Section id="section-invitation">
        <SectionLayout
            heading={
                        <SectionHeading 
                            title="Get the roadmap to a happy life from the guide who is aware of all the detours"
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <BoxLayout 
                firstText
                text={
                    <Fragment>
                        <p className="paragraph">
                            <strong>
                                    Join me and Duncan van Tongeren, the business mastermind behind Chittawela, on a transformational 7-day retreat that will revolutionize your life, and imbue it with drastically different meaning.
                            </strong>
                        </p>
                        <p className="paragraph">
                            <strong>
                                    Be privy to our extraordinary and unique combination of having a coach synchronized to you who is able to attune, perceive and identify your deepest values, drives and ambitions, and who will help you remove your inner barriers to success, and - at the same time - receiving up-to-date research-based actionable information, to empower you and realize your dreams - happily and effectively.
                            </strong>
                        </p>
                        <p className="paragraph">
                            You and an exclusive group of 11 other like-minded and adventurous high achievers will have
                            <strong>unlimited access</strong> to my <strong>soul-inspiring teaching</strong> and expertise, and will benefit from Duncan's <strong>scientific genius</strong> epitomized by the structure and contents of our program.
                        </p>
                        <p className="paragraph">
                            I'll be your personal confidant, mentor and coach, and will walk with you through your process of emotional advancement by opening you up to <strong>what you truly need in life</strong>, and on your road to <strong>real self-authenticity</strong>                    - in personal and professional life. In the emotional sanctuary that I'll create together with you, I will empower you to get to know your emotional state, and show you how to improve your self-love, inner peace, and awareness of inner
                            balance. Lastly, I'll follow up your transformational process after the retreat to support, guide and smooth your journey to your new you.
                        </p>
                        <p>
                            Because of the group's intimate size, I can help you go <strong>deeper and farther</strong> in aligning yourself to your inner goals and ambitions.
                        </p>
                    </Fragment>
                }
                other={
                    <Photo
                        name="invitation"
                        media="" 
                        srcSet="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/invitation/guides.jpg 1920w" 
                        sizes="100vw" 
                        src="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_585/v1584329960/invitation/guides.jpg" 
                        alt="Your guides"
                    />
                }
            />
        </SectionLayout>
    </Section>;

SectionInvitation.displayName = "SectionInvitation";

export default SectionInvitation;