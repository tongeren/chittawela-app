import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Carousel from '../components/Carousel/Carousel';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import slides from '../static/slides';

const BANBUREE_SLIDES = slides(1);

const SectionResort = () => 
    <Section id="section-resort">
        <SectionLayout
            marginTop
            heading={
                        <SectionHeading 
                            title="A breathtaking setting for transformation"
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
                            We will lay the groundwork for your succesful transformation in the beautiful Banburee Resort & Spa, located in the southeast of Koh Samui, the most luxurious island of Thailand. 
                        </strong>
                        </p>
                        <p className="paragraph">
                            This secluded and exclusive resort is an soothing gem in the oasis of serenity of Laem Set. You'll love waking up in the morning and after a nice bath or outside rain shower, strolling down the path and taking in the stunning sights of Thai Bay - especially during sunrise and sunset - and the green hills covered in lush rainforest behind you. You can hang out at the beautiful salt water pool, run, meditate, or just relax on the beach, take a kayak out into the sea for a little sight-seeing adventure, and enjoy delicious and healthy meals in the romantic beachfront restaurant.
                        </p>
                        <p>
                            After your morning yoga session to gently awaken your body and mind, and after you enjoyed our breakfast, and had time to refresh, we start the core work of our daily program. After a morning full of insight and epiphany we stop around noon, giving you time to go for lunch and enjoy your daily massage, to have personal time, or to experience the power of metta in bringing about radical change during one of your two your one-on-one coaching sessions with me. Because of the afternoon heat and the early onset of darkness, our evening sessions then recommence after dinner. After about two hours, we normally end with a relaxing meditation session tuned to the particular subjects of the day.
                        </p>
                    </Fragment>
                }
                other={
                    <Carousel slides={ BANBUREE_SLIDES } />
                }
            />
        </SectionLayout>
    </Section>

export default SectionResort;