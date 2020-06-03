import React from 'react';
import { useObserver } from 'mobx-react-lite';
import CTA from '../CTA/CTA';
import SVG from '../SVG/SVG';
import Crossfade from '../Crossfade/Crossfade';
import { useStore } from '../StoreProvider/StoreProvider';
import restrictToClient from '../../hoc/restrictToClient';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeroProps } from './types';

const Hero: React.FunctionComponent<HeroProps> = ({ sprite, crossfade, cta }): React.ReactElement =>{
    const store = useStore();

    const { width, height } = useWindowDimensions();

    if (!(width===null) && !(height===null)) {
        store.client.setWindowWidth(width);
        store.client.setWindowHeight(height);
        store.addClipPathBeforeAnimation();
    }

    return useObserver( () => (
        <div id="hero" className={ store.addHeroAnimation() } style={ store.ui.getHeroHeightStyle() }>
            <div className="hero__svg-container">
                <SVG classes="hero__svg" sprite={ sprite } />
            </div>
            <div id="background" className="hero__crossfade">
                <Crossfade { ...crossfade } />
            </div>        
            <div className="hero__cta">
                <CTA { ...cta } />
            </div>
            <div id="vimeo-video" className="hero__video" />
        </div>
    ));

};

export default restrictToClient(Hero);







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

