import FlexColItem from '../components/FlexColLayout/FlexColItem/FlexColItem';
import FlexColLayout from '../components/FlexColLayout/FlexColLayout';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionInspiring = ():React.ReactElement => 
    <Section id="section-inspiring">
        <SectionLayout
            blue
            heading={
                        <SectionHeading 
                            title="I chose a soothing, inspiring, and intimate location for my retreat for three reasons:"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <FlexColLayout>
                <FlexColItem heading="1. To indulge your mind, body & soul">
                    <p className="paragraph">
                        To be able to go through the subtle process of self-discovery and the intense process of personal growth, it is very helpful to be calm, grounded, and relaxed.
                    </p>
                    <p className="paragraph">
                        To uncover your soul's deepest purpose you need to be able to clearly experience yourself. For that it's essential that you are unimpeded by mental and physical stress. You need a safe and soothing environment that enables you to free both body and mind,
                        and be yourself, so we can work on your road blocks, awaken your soul, and prime yourself for optimal performance. Our beautiful and powerful nature sanctuary fulfills that need far better than a sterile, urban setting ever would.
                    </p>
                    <p>
                        Although I made your well-being an integral part of the program already, I find it important as well that you have the time and space to enjoy your surroundings and to take care of yourself in your own ways too.
                    </p>
                </FlexColItem>
                <FlexColItem heading="2. To let you experience the inspiration that comes with a change of culture">
                    <p className="paragraph">
                        The Thai are well-known for their warmth, hospitality and generosity. These strengths and of course - their famous Thai smile - will inspire you to live a more happy and grateful life.
                    </p>
                    <p className="paragraph">
                        Moreover, the new sensations and other ways of doing things in this other part of the world, can change your perspective, give you a broader view on life in general, and inspire you to experiment and take more personal risk.
                    </p>
                    <p>
                        I am sure that you come back from our retreat not only fully prepared for actualizing your life's vision, but also having added an unforgettable life experience to your list of accomplishments.
                    </p>
                </FlexColItem>
                <FlexColItem heading="3. To find empowering friendships">
                    <p className="paragraph">
                        One of the most important elements of a succesful life is to have and nurture great friendships with people who deeply understand what you are going through, so you are able to share and empower each other on your journey.
                    </p>
                    <p>
                        Our intimate location and our small group of like-minded people, together with our intensive program let you rapidly bond together, possibly even creating lifelong friendships.
                    </p>
                </FlexColItem>
            </FlexColLayout>
        </SectionLayout>
    </Section>

SectionInspiring.displayName = "SectionInspiring";

export default SectionInspiring;