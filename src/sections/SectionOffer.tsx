import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Composition from '../components/Composition/Composition';
import Photo from '../components/Photo/Photo';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import TextTransform from '../components/TextTransform/TextTransform';

const PHOTOS = {
    "photo1": {
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584529453/offer/birdseye.jpg", 
        "alt": "Bird's eye view of Banburee",
        "name": "offer"
    },
    "photo2": {
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584529453/offer/yoga.jpg",
        "alt": "Yoga",
        "name": "offer"
    },
    "photo3": {
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584529453/offer/dinner.jpg",
        "alt": "Sunset dinner",
        "name": "offer"
    }
};

const SectionOffer = ():React.ReactElement => 
    <Section id="section-offer">
        <SectionLayout
            topMargin
        >
            <BoxLayout 
                firstText
                text={  
                        <Fragment>
                            <SectionHeading 
                                title="As one of our exclusive retreat attendees, you'll receive:"
                                color="gold"
                                align="center"
                                margin="medium"
                            />
                            <ul className="list">
                                <li className="list__item">
                                    <strong>A specially designed preparatory program</strong> to lay the groundwork for a succesful and effective retreat.
                                </li>
                                <li className="list__item">
                                    <strong>Seven powerful and profound days with me and my team</strong> in which we will be coaching, mentoring, and guiding you the entire time.
                                </li>
                                <li className="list_item">
                                    <strong>An unforgettable day trip on a luxurious catamaran</strong> through the pristine archipelago of Ang Thong National Marine Park giving us the perfect environment to turn your ambitions into a winning strategy and an effective
                                    action plan.
                                </li>
                                <li className="list__item">
                                    <strong>A welcome reception the night before</strong> the retreat begins to meet the other professionals who will go through similar journeys along with you.
                                </li>
                                <li className="list__item">
                                    <strong>Daily breakfast with delicious healthy food choices</strong>, illustrating how you can create a healthy diet for yourself when you return home - as part of a good basis for an active and energized lifestyle.
                                </li>
                                <li className="list__item">
                                    <strong>Two group dinners, where we serve authentic Thai food, to let you bond further</strong> with the group and my team, all the while enjoying our view of the Five Islands.
                                </li>
                                <li className="list__item">
                                    <strong>Two holistic massage coaching sessions of 1.5 hour each with me</strong> to effectively connect to your inner self and understand and resolve any roadblocks to success you might have.
                                </li>
                                <li className="list__item">
                                    <strong>Five massage sessions of 1 hour each</strong> on the other days to relax your body and mind to keep you being in optimum condition for learning during this intensive week.
                                </li>
                                <li className="list__item">
                                    <strong>Daily morning yoga sessions</strong> to gently awaken your body and soul for the day ahead and strengthen the connection to and awareness of your inner self.
                                </li>
                                <li className="list__item">
                                    <strong>Daily evening meditation sessions</strong> in which we teach you different mediation forms that - amongst others - will help you, to deepen your understanding of yourself, to become more aware of your inner dialogue and
                                    change your mindset, and to improve inner strength by directing unconditional love to yourself and others.
                                </li>
                                <li className="list__item">
                                    <strong>A specially designed follow-up program</strong> to support you in your transition after the retreat.
                                </li>
                                <li className="list__item">
                                    <strong>Three two-monthy follow-up private Skype video calls of 30 mins each</strong> to fully support you in your transformation and keep you accountable.
                                </li>
                                <li className="list__item">
                                    <strong><TextTransform transform="emphasis">LIFETIME ACCESS</TextTransform> to our - continually updated and expanding - program materials</strong> designed to bring out your deepest desires and optimized to bring about the vision of your life you have set your heart on.
                                </li>
                                <li className="list__item">
                                    <strong><TextTransform transform="emphasis">LIFETIME MEMBERSHIP</TextTransform> to our inspiring and supportive community</strong> where you can share your stories, and support and inspire each other.
                                </li>
                            </ul>
                        </Fragment>
                    }
                other={
                    <Composition
                        photo1={ <Photo { ...PHOTOS.photo1 } /> }
                        photo2={ <Photo { ...PHOTOS.photo2 } /> }
                        photo3={ <Photo { ...PHOTOS.photo3 } /> }
                    />
                }
            />
        </SectionLayout>
    </Section>

SectionOffer.displayName = "SectionOffer";

export default SectionOffer;