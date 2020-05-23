import { Component } from 'react';

import CTA from '../CTA/CTA';
import CTAButton from '../CTA/CTAButton/CTAButton';
import RetreatInfo from '../RetreatInfo/RetreatInfo';
import SVG from '../SVG/SVG';

// helpers
import toUnits from '../../helpers/toUnits';
import calcClipHeight from '../../helpers/calcClipHeight';

//hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';
import withPortrait from '../../hoc/withPortrait';
import isPortrait from '../../hooks/isPortrait';

const HERO_IMG_CLASS ="hero-img";
const KEYFRAMES_NAME ="clippingHeader";

class Hero extends Component {
    state = {
        height: 0
    };

    insertKeyFrameRules = (cssText) => {
        // Use spread operator to create an array of sheets from the StyleSheetList
        const sheets = [ ...document.styleSheets];

        // The StyleSheet with href null is our stylesheet, which is a CSSStyleSheet
        const sheet = sheets.filter(sheet => sheet.href === null)[0];

        // Insert the keyframe rules
        sheet.insertRule("@keyframes " + cssText, 1);
        sheet.insertRule("@-webkit-keyframes " + cssText, 1);
    };

    componentDidMount() {
        // Determine the height of the image in the hero, which is the only HTMLElement with a correct height
        const height = document.getElementsByClassName(HERO_IMG_CLASS)[0].getBoundingClientRect().height;

        // Set the height of the hero to the correct height
        this.setState({
            height: height
        });

        if (!this.props.isPortrait) {
            const clip = calcClipHeight(this.props.windowWidth);
            const rightHeaderHeight = height - clip;

            const H = toUnits(height, "px");
            const R = toUnits(rightHeaderHeight, "px");

            const cssText = KEYFRAMES_NAME + "{ 0% { clip-path: none; } 100% { clip-path: polygon(0 0, 0 " + H +", 100vw " + R + ", 100vw 0); } }";

            this.insertKeyFrameRules(cssText);
        };
    };

    render() {
        const height = this.state.height;
        const H = toUnits(height, "px");

        const style = { 
            height: H
        };        

        return (
            <div id="hero" className="hero" style={ style }>
                <div className="hero__svg-container">
                    <SVG classes="hero__svg" sprite="wiphatthra" />
                </div>
                <div id="background" className="hero__crossfade">
                    <div className="crossfade">
                        <picture className="crossfade__img" > 
                            <source 
                                media="(orientation: portrait) and (width: 320px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_4.jpg 2x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 360px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_4.jpg 3x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1440/v1584329960/hero/hero-big_4.jpg 4x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 375px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_4.jpg 2x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_4.jpg 3x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 414px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_4.jpg 828w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_4.jpg 1080w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_4.jpg 1242w" 
                                sizes="100vw" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 768px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_4.jpg 1x"
                            />
                            <source 
                                media="(orientation: landscape) and (min-width: 1336px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_4.jpg 1366w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_4.jpg 1440w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_4.jpg 2560w" 
                                sizes="100vw" 
                            />
                            <img 
                                className="hero-img" 
                                src="
                                    https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_4.jpg" 
                                alt="Wiphatthra film image 4"
                            />
                        </picture>
                        <picture className="crossfade__img" > 
                            <source 
                                media="(orientation: portrait) and (width: 320px)" 
                                srcSet="
                                    https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_3.jpg 2x"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 360px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_464,y_648,w_3888,h_2592,c_crop/w_1080/v1584329960/hero/hero-big_3.jpg 3x, 
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_464,y_648,w_3888,h_2592,c_crop/w_1440/v1584329960/hero/hero-big_3.jpg 4x"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 375px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_3.jpg 2x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_3.jpg 3x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 414px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_3.jpg 828w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_3.jpg 1080w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_3.jpg 1242w" 
                                sizes="100vw"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 768px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_3.jpg 1x" 
                            />
                            <source 
                                media="(orientation: landscape) and (min-width: 1336px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_109,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_3.jpg 1366w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_109,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_3.jpg 1440w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_109,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_3.jpg 2560w" 
                                sizes="100vw"
                                />
                            <img 
                                className="hero-img" 
                                src="
                                    https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_109,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_3.jpg" 
                                alt="Wiphatthra film image 3"
                            />
                        </picture>
                        <picture className="crossfade__img" >
                            <source 
                                media="(orientation: portrait) and (width: 320px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_2.jpg 2x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 360px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_2.jpg 3x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1440/v1584329960/hero/hero-big_2.jpg 4x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 375px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_2.jpg 2x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_2.jpg 3x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 414px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_2.jpg 828w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_2.jpg 1080w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_2.jpg 1242w" 
                                sizes="100vw"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 768px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_2.jpg 1x" 
                            />
                            <source 
                                media="(orientation: landscape) and (min-width: 1336px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_194,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_2.jpg 1366w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_194,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_2.jpg 1440w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_194,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_2.jpg 2560w" 
                                sizes="100vw"
                            />
                            <img 
                                className="hero-img" 
                                src="
                                    https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_194,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_2.jpg" 
                                alt="Wiphatthra film image 2"
                            />
                        </picture>
                        <picture className="crossfade__img" > 
                            <source 
                                media="(orientation: portrait) and (width: 320px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_1.jpg 2x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 360px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_1.jpg 3x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1440/v1584329960/hero/hero-big_1.jpg 4x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 375px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_1.jpg 2x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_1.jpg 3x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 414px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_1.jpg 828w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_1.jpg 1080w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_1.jpg 1242w" 
                                sizes="100vw"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 768px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_1.jpg 1x" 
                            />
                            <source 
                                media="(orientation: landscape) and (min-width: 1336px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_175,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_1.jpg 1366w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_175,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_1.jpg 1440w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_175,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_1.jpg 2560w"
                                sizes="100vw" 
                            />
                            <img 
                                className="hero-img" 
                                src="
                                    https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_175,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_1.jpg" 
                                alt="Wiphatthra film image 1"
                            />
                        </picture>
                        <picture className="crossfade__img" > 
                            <source 
                                media="(orientation: portrait) and (width: 320px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_0.jpg 2x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 360px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_0.jpg 3x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1440/v1584329960/hero/hero-big_0.jpg 4x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 375px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_0.jpg 2x,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_0.jpg 3x" 
                            />
                            <source 
                                media="(orientation: portrait) and (width: 414px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_0.jpg 828w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_0.jpg 1080w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_0.jpg 1242w"
                                sizes="100vw"
                            />
                            <source 
                                media="(orientation: portrait) and (width: 768px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_0.jpg 1x" 
                            />
                            <source 
                                media="(orientation: landscape) and (min-width: 1336px)" 
                                srcSet="
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_100,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_0.jpg 1366w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_100,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_0.jpg 1440w,
                                        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_100,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_0.jpg 2560w" 
                                sizes="100vw"
                            />
                            <img 
                                className="hero-img" 
                                src="https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_100,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_0.jpg" 
                                alt="Wiphatthra film image 0"
                            />
                        </picture>
                    </div>
                </div>        
                <div className="hero__cta">
                    <CTA 
                        headline="Be on your way to a new you"
                        explanation="Realign with inner values and ambitions: find yourself, in a supportive, safe, and quiet space, where you will receive essential guidance and tools actualizing your journey of self-discovery and transformation."
                        retreatInfo={
                            <RetreatInfo    
                                date="March 1-7th, 2021"
                                location="Koh Samui, Thailand"
                            />
                        }
                        ctaButton={
                            <CTAButton cta="Click for a message from Wiphatthra" />
                        }
                    />
                </div>
                <div id="vimeo-video" className="hero__video"></div>
            </div>
        );
    };
};

export default withPortrait(withWindowDimensions(restrictToClient(Hero)));

