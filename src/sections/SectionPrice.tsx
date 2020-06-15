import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import CenterBox from '../components/CenterBox/CenterBox';
import LinkAnchor from '../components/LinkAnchor/LinkAnchor';
import Photo from '../components/Photo/Photo';
import PricingTable from '../components/PricingTable/PricingTable';
import PhotoQuote from '../components/PhotoQuote/PhotoQuote';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionPrice = ():React.ReactElement => {
    return (
        <Section id="section-price">
            <SectionLayout
                color
                heading={
                    <SectionHeading
                        title="And the cost of this unique profoundly life-changing adventure and experience?"
                        align="center"
                        margin="medium"
                    />
                }
            >
                <Fragment>
                    <BoxLayout
                        text={
                            <Fragment>
                                <p className="paragraph">
                                Let's assume for a moment that you are serious about changing your life and opt to invest in your education. You might choose a set of personal development courses &agrave; &euro;2000-3000 per course to follow. Then you would easily end up spending well
                                in excess of &euro; 10000, while still not getting the personal intensive attention you need to result in the enduring personal or professional deep change and impact you seek.
                                </p>
                                <p className="paragraph">
                                    But if you join my team and me at my private retreat in Samui, you only invest a fraction of that cost - just &euro;3990 a person.
                                </p>
                                <p className="paragraph">
                                    Since it is my passion and life's mission to guide people to live happy and fulfilled lives, money is not my prime motivator, and that's why I like to make it possible for everyone who wants to commit to full self-actualization and start their journey
                                    now, to an extraordinary life that will better the world, to get personal guidance from me.
                                </p>
                                <h3 className="heading-tertiary-alt u-margin-bottom-small">
                                    Moreover, we would like <span className="limited">- for a limited time only -</span> to sponsor you by taking care of some of your costs:
                                </h3>
                            </Fragment>
                        }
                        other={
                            <PhotoQuote 
                                photo={ <Photo src="/img/temp_leap.jpg" alt="" name="guides"/> }
                                quote="...anchor on fairness - quote from authority..."
                            />
                        }
                    />

                    <PricingTable />

                    <div className="u-text-center u-margin-bottom-medium u-margin-top-small">
                        <div className="">
                            If you have been searching for that <strong>fully integrated approach</strong> to life-transformation as a <strong>comprehensive program</strong> that addresses personal change <strong>in all its aspects, and along its entire journey</strong>,
                        </div>
                        <div className="important">
                            <span>then this is your opportunity.</span>
                        </div>
                        <span>
                            <strong>
                                To find out whether we are a match for each other and secure your place quickly, please apply below.
                            </strong>
                        </span>
                    </div>
                    <CenterBox>
                        <LinkAnchor href="/#section-book" text="Apply today" />
                    </CenterBox>
                </Fragment>
            </SectionLayout>
        </Section>
    );
}

SectionPrice.displayName = "SectionPrice";

export default SectionPrice;