import React from 'react';
import CTA from '../CTA/CTA';
import SVG from '../SVG/SVG';
import Crossfade from '../Crossfade/Crossfade';
import { useStore } from '../StoreProvider/StoreProvider'
// import { useStore } from '../../stores/stores'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeroProps } from './types';

const Hero: React.FunctionComponent<HeroProps> = ({ sprite, crossfade, cta }): React.ReactElement =>{
    const store = useStore();
    const { width, height } = useWindowDimensions();

    if (!(width===null)) store.client.setWindowWidth(width);
    let styles;
    if (!(height===null)) {
        store.client.setWindowHeight(height);
        styles = { height: height + "px" };
    }
    
    return (
        <div id="hero" className="hero" >
            <div className="hero__svg-container">
                <SVG classes="hero__svg" sprite={ sprite } />
            </div>
            <div id="background" className="hero__crossfade" style={ styles }>
                <Crossfade { ...crossfade } />
            </div>        
            <div className="hero__cta">
                <CTA { ...cta } />
            </div>
            <div id="vimeo-video" className="hero__video" />
        </div>
    );

};

export default Hero;

// 
// console.log("store=", store);
// console.log("Hero: crossfade.crossfade[0].sources", crossfade.crossfade[0].sources);
// const HERO_IMG_CLASS ="hero-img";
// const KEYFRAMES_NAME ="clippingHeader";

// const height = this.state.height;
// const H = toUnits(height, "px");

// const style = { 
//     height: H
// };        

// insertKeyFrameRules = (cssText) => {
//     // Use spread operator to create an array of sheets from the StyleSheetList
//     const sheets = [ ...document.styleSheets];

//     // The StyleSheet with href null is our stylesheet, which is a CSSStyleSheet
//     const sheet = sheets.filter(sheet => sheet.href === null)[0];

//     // Insert the keyframe rules
//     sheet.insertRule("@keyframes " + cssText, 1);
//     sheet.insertRule("@-webkit-keyframes " + cssText, 1);
// };

// componentDidMount() {
//     // Determine the height of the image in the hero, which is the only HTMLElement with a correct height
//     const height = document.getElementsByClassName(HERO_IMG_CLASS)[0].getBoundingClientRect().height;

//     // Set the height of the hero to the correct height
//     this.setState({
//         height: height
//     });

//     if (!this.props.isPortrait) {
//         const clip = calcClipHeight(this.props.windowWidth);
//         const rightHeaderHeight = height - clip;

//         const H = toUnits(height, "px");
//         const R = toUnits(rightHeaderHeight, "px");

//         const cssText = KEYFRAMES_NAME + "{ 0% { clip-path: none; } 100% { clip-path: polygon(0 0, 0 " + H +", 100vw " + R + ", 100vw 0); } }";

//         this.insertKeyFrameRules(cssText);
//     };
// };

{/* <CTA 
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
                /> */}