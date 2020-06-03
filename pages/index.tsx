import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// client(browser)-only components:
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
import Hero from '../components/Hero/Hero';
import LogoBox from '../components/LogoBox/LogoBox';
import MenuNav from '../components/MenuNav/MenuNav';

const NavBar = dynamic(() => import('../components/NavBar/NavBar'), { ssr: false });

import SocialMedia from '../components/SocialMedia/SocialMedia';
import SubscribeForm from '../components/SubscribeForm/SubscribeForm';
import FooterTestimonial from '../components/FooterTestimonial/FooterTestimonial';

import { CROSSFADE } from '../static/crossfade';

const NAVIGATION = [
    {
        "href": "#section-challenge",
        "name": "Challenge"
    },
    {
        "href": "#section-foundation",
        "name": "Foundation"
    },
    {
        "href": "#section-transformation",
        "name": "Transformation"
    },
    {
        "href": "#sanctuary",
        "name": "Sanctuary"
    },
    {
        "href": "/login",
        "name": "Login"
    }
];

const NAV_LEFT = [
    { "href": "/policy", "name": "Privacy policy" },
    { "href": "/terms", "name": "Terms & conditions" },
    { "href": "/about", "name": "About" }
];

const NAV_RIGHT = [
    { "href": "/blog", "name": "Blog" },
    { "href": "/newsletter", "name": "Newsletter" },
    { "href": "/contact", "name": "Contact" }
];


const CTA = {
    headline: "Be on your way to a new you", 
    explanation: "Realign with inner values and ambitions: find yourself, in a supportive, safe, and quiet space, where you will receive essential guidance and tools actualizing your journey of self-discovery and transformation.", 
    retreatInfo: {
        date: "March 1-7th, 2021",
        location: "Koh Samui, Thailand"
    }, 
    ctaButtonText: "Click here for a message from Wiphatthra"
};

const Home:React.FunctionComponent = ():React.ReactElement => {
  
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

            <SectionBook />

        </main>

        <FooterTestimonial />
        <FooterClipping />
        
        <FooterBottom 
            logoBox       ={ <LogoBox name="Chittawela" flex="column" /> }
            navLeft       ={ <MenuNav menu={ false } flex="column" navItems={ NAV_LEFT } lastButton={ false } /> }
            navRight      ={ <MenuNav menu={ false } flex="column" navItems={ NAV_RIGHT } lastButton={ false } /> }
            socialMedia   ={ <SocialMedia /> } 
            subscribeForm ={ <SubscribeForm /> } 
            copyright     ={ <Copyright period="2019-2020" name="Chittawela LLP" /> }
        />
    </div>
  );
};

export default Home;

