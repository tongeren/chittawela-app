import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Carousel from '../components/Carousel/Carousel';
import CenterBox from '../components/CenterBox/CenterBox';
import Section from '../components/Section/Section';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import slides from '../static/slides';

const SLIDES_PLAY = slides(0);

const SectionPlay = ():React.ReactElement => {
    return (
        <Section id="section-play">
            <SectionLayout>
                <BoxLayout 
                    firstText
                    text={
                        <Fragment>
                            <p className="paragraph">
                                <strong>Besides our intensive program, there will be plenty of opportunities to relax, rejuvenate, and enjoy jourself.</strong>
                            </p>
                            <p className="paragraph">
                                We start our adventure with an opening night cocktail reception, so you can get to know the other participants and meet your future support team.
                            </p>
                            <p className="paragraph">
                                On our most important 4th day of the program we leave early after breakfast to switch our resort environment and 'classroom' for a magnificent catamaran that will take us on a gorgeous cruise through the pristine Ang Thong archipelago. This will be a truly unforgettable, soul-inspiring, and mind-expanding experience, supporting you and your fellow high achievers in the planning of the practical realization of your visions for your future selves that day. Besides this 'working'you will have ample freedom to go swimming and snorkeling during our trip.
                            </p>
                            <p className="paragraph">
                                Moreover, on the same day and on our last day we organize special group dinners to create even more moments to build deeper relationships, form friendships, and benefit from each others input, expertise and wisdom.
                            </p>
                            <p className="paragraph">
                                Although our program is develop to do just that, we recognize that growth, expansion, and insights don't solely occur during our sessions. Ample private time is essential as well: to assimilate ideas, to truly realize and deeper integrate personally.
                            </p>
                            <p className="u-margin-bottom-medium">
                                Given the nature of our program we made it possible on all but the 4th day to have a mid-day break. To assist in your well-being and optimize your overall functioning we integrated your daily massages and your one-on-one sessions with me into that time period. Besides those you'll have still enough private time to hang out in the salt-water pool, become fully aware of your beautiful surroundings, to reflect or prepare for your evening session, or just simply to relax and unwind.
                            </p>
                            <CenterBox>
                                <a href="" className="button button--white-orange">Apply to join us</a>
                            </CenterBox>
                        </Fragment>
                    }
                    other={
                        <Carousel name="play" slides={ SLIDES_PLAY } />
                    }   
                />
            </SectionLayout>
        </Section>
    );
}

export default SectionPlay;