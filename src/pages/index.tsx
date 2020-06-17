import Head from 'next/head';
import { getSnapshot, ModelSnapshotType } from 'mobx-state-tree';
import { initStore } from '../stores/stores';
import { useMounted } from '../hooks/useMounted/useMounted';

import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import ResponsivePlayerModal from '../components/ResponsivePlayerModal/ResponsivePlayerModal';

// Normal imports for store user components:
import Divider from '../components/Divider/Divider';
import FooterClipping from '../components/FooterClipping/FooterClipping';
import PictureDivider from '../components/PictureDivider/PictureDivider';

// sections
import SectionDescription from '../sections/SectionDescription';
import SectionChallenge from '../sections/SectionChallenge';
import SectionFoundation from '../sections/SectionFoundation';
import SectionStatements from '../sections/SectionStatements';
import SectionInvitation from '../sections/SectionInvitation';
import SectionLeap from '../sections/SectionLeap';
import SectionTransformation from '../sections/SectionTransformation';
import SectionGoal from '../sections/SectionGoal';
import SectionWork from '../sections/SectionWork';
import SectionPlay from '../sections/SectionPlay';
import SectionFollowUp from '../sections/SectionFollowUp';
import SectionLocation from '../sections/SectionLocation';
import SectionResort from '../sections/SectionResort';
import SectionInspiring from '../sections/SectionInspiring';
import SectionGroup from '../sections/SectionGroup';
import SectionGuides from '../sections/SectionGuides';
import SectionTestimonials from '../sections/SectionTestimonials';
import SectionSelection from '../sections/SectionSelection';
import SectionCriteria from '../sections/SectionCriteria';
import SectionOffer from '../sections/SectionOffer';
import SectionPrice from '../sections/SectionPrice';
import SectionOpportunity from '../sections/SectionOpportunity';
import SectionBook from '../sections/SectionBook';

import Copyright from '../components/Copyright/Copyright';
import FooterBottom from '../components/FooterBottom/FooterBottom';
import LogoBox from '../components/LogoBox/LogoBox';
import MenuNav from '../components/MenuNav/MenuNav';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import SubscribeForm from '../components/SubscribeForm/SubscribeForm';
import FooterTestimonial from '../components/FooterTestimonial/FooterTestimonial';

// export const getServerSideProps = () => {
//     const store = initStore();
  
//     return { props: { initialState: getSnapshot(store) } };
// };

import { CROSSFADE } from '../_static/crossfade';

const MEDIA = [
    { "sprite": "facebook", "url": new URL("https://quantapex.com") },
    { "sprite": "twitter", "url": new URL("https://quantapex.com") },
    { "sprite": "pinterest", "url": new URL("https://quantapex.com") },
    { "sprite": "instagram", "url": new URL("https://quantapex.com") },
    { "sprite": "youtube", "url": new URL("https://quantapex.com") }
];

const NAVIGATION = [
    {
        "href": "/#section-challenge",
        "text": "Challenge"
    },
    {
        "href": "/#section-foundation",
        "text": "Foundation"
    },
    {
        "href": "/#section-transformation",
        "text": "Transformation"
    },
    {
        "href": "/#sanctuary",
        "text": "Sanctuary"
    },
    {
        "href": "/login",
        "text": "Login"
    }
];

const NAV_LEFT = [
    { "href": "/policy", "text": "Privacy policy" },
    { "href": "/terms", "text": "Terms & conditions" },
    { "href": "/about", "text": "About" }
];

const NAV_RIGHT = [
    { "href": "/blog", "text": "Blog" },
    { "href": "/newsletter", "text": "Newsletter" },
    { "href": "/contact", "text": "Contact" }
];


const CTA = {
    headline: "be on your way to a new you", 
    explanation: "Realign with inner values and ambitions: find yourself, in a supportive, safe, and quiet space, where you will receive essential guidance and tools actualizing your journey of self-discovery and transformation.", 
    retreatInfo: {
        date: "March 1-7th, 2021",
        location: "Koh Samui, Thailand"
    }, 
    ctaButtonText: "Click here for a message from Wiphatthra"
};

const Home:React.FunctionComponent = ():React.ReactElement => {
    const isMounted = useMounted();

    console.log("Home: isMounted", isMounted);

    return (
        <div className="container">
            <Head>
                <title>Self-transformational retreats &mdash; Be on your way to a new you &mdash; Chittawela</title>
                <link rel="icon" href="/logo_192px_color.png" />

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pinyon+Script:400&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Caveat:400&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cormorant+SC:300&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700display=swap" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />

            </Head>

            <main>
                <Hero 
                    sprite="wiphatthra"
                    crossfade={ CROSSFADE }
                    cta={ CTA }
                /> 
                <NavBar 
                    name="Chittawela" 
                    flex="row"  
                    navItems={ NAVIGATION }
                    lastButton= { true }
                />
                <ResponsivePlayerModal /> 

                <SectionDescription />
                <SectionChallenge />
                <SectionFoundation />
                
                <PictureDivider src="/img/lotus_1920x1280.jpg" aspectRatio={ 1920/1280 }/>

                <SectionInvitation />
                <SectionStatements />

                <Divider 
                    id="sanctuary"
                    title="Best of all, you'll lay the basis for your ultimate transformation in a secluded and soothing resort on Thailand's luxury island Samui" 
                    large 
                    shiftBottom
                />
                <PictureDivider shift src="/img/banburee_1280x835.jpg" aspectRatio={ 1280/835 }/>

                <SectionLeap />
                <SectionTransformation />
                <SectionGoal />

                <Divider 
                    title="This is what our program looks like..."
                />
                <SectionWork />


                <Divider
                    title="And there will be enough time for relaxation and enjoyment too!"
                    shiftBottom
                />
                <PictureDivider src="/img/ang_thong_national_park_1920x1080.jpg" aspectRatio={ 1920/1080 } shift /> 
                <SectionPlay />

                <SectionFollowUp />
                <PictureDivider src="/img/Lana_climbing_stairs_1920x2560.jpg" aspectRatio={ 1920/2560 } shift scroll/>
                <SectionLocation />

                <Divider 
                    title="Welcome to your sanctuary: Banburee Resort & Spa, Koh Samui, Thailand"
                    subtitle="These warm and spectacular surroundings offer you the safe harbour to go deeper, dream bigger, and inspire you realize your deepest desires!"
                />
                <SectionResort />
                <SectionInspiring />
                <SectionGroup />
                
                <Divider title="And there is us - your guides:" />
                <SectionGuides />

                <Divider
                    title="Our clients agree:"
                    subtitle="This retreat will exceed your wildest expectations"
                />

                <SectionTestimonials /> 
                <SectionSelection />
                <SectionCriteria />
                <SectionOffer />
                <SectionPrice />
                <SectionOpportunity />

                <Divider title="Now is the time to set your change in motion" />

                {/* <SectionBook /> */}

            </main>

            <FooterTestimonial />
            <FooterClipping />
            
            <FooterBottom 
                logoBox       ={ <LogoBox name="Chittawela" flex="column" /> }
                navLeft       ={ <MenuNav menu={ false } flex="column" navItems={ NAV_LEFT } lastButton={ false } /> }
                navRight      ={ <MenuNav menu={ false } flex="column" navItems={ NAV_RIGHT } lastButton={ false } /> }
                socialMedia   ={ <SocialMedia media={ MEDIA } /> } 
                subscribeForm ={ <SubscribeForm /> } 
                copyright     ={ <Copyright period="2019-2020" name="Chittawela LLP" /> }
            />
        </div>
    );
};

export default Home;

