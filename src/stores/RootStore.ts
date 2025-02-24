import { types, Instance, SnapshotIn, SnapshotOut, ModelSnapshotType } from 'mobx-state-tree';
import { spy } from 'mobx';
import { Client, ClientType } from './types/Client';
import { Animations, AnimationsType } from './types/Animations';
import { UI, UIType } from './types/UI';
import CSS from 'csstype';
import insertKeyFrameRules from '../helpers/insertKeyFrameRules';

const KEYFRAMES_NAME ="clippingHeader";

const COLOR_GOLD = "rgba(136, 113, 89, 1)";
const COLOR_WHITE = "white";

export type RootStoreType = typeof RootStore;
export type RootStoreModel = Instance<RootStoreType>;
export type RootStoreSnapshotIn = SnapshotIn<RootStoreType>;
export type RootStoreSnapshotOut = SnapshotOut<RootStoreType>;

export interface RootModel {
    client: ClientType
    animations: AnimationsType
    ui: UIType
    inserted: boolean
    passed: boolean
}

const RootStore = types
    .model("RootStore", {
        client: Client,
        animations: Animations,
        ui: UI,
        inserted: false,
        passed: false
    })
    .actions(self => ({
        addClipPathBeforeAnimation():void {
            const height = self.ui.imageHeight;
            const clip = self.client.clipHeight();
            const rightHeaderHeight = height - clip;

            const H = height + "px";
            const R = rightHeaderHeight + "px";

            const cssText = KEYFRAMES_NAME + "{ 0% { clip-path: none; } 100% { clip-path: polygon(0 0, 0 " + H +", 100vw " + R + ", 100vw 0); } }";

            if (!self.inserted && !(height === 0)) {
                insertKeyFrameRules(cssText);
                self.inserted = true;
            }
        }
    }))
    .views(self => ({
        addHeroAnimation():string {
            // Animate (clip) the hero iaoi responsiveState in landscape mode and the CTAButton animation has ended
            const flag = (self.client.orientation === "landscape") && self.animations.ctaButtonAnimationEnd;

            const classes = "hero";
            return flag ? classes.concat(" ", "hero--animated") : classes;
        },
        addNavBarAnimation():string {
            // Animate the navbar iaoi responsiveState in landscape mode, the CTAButton animation has ended, and the navbar animation has not ended earlier 
            const flag = (self.client.orientation === "landscape") && self.animations.ctaButtonAnimationEnd && !self.animations.navbarAnimationEnd;
            console.log()
            const classes = "navbar";
            return flag ? classes.concat(" ", "navbar--animated") : classes;
        },
        getNavBarStyles():CSS.Properties {
            const height = self.ui.imageHeight;
            const clip = self.client.clipHeight();
            const rightHeaderHeight = height - clip;

            const passed = (self.client.scrollY > rightHeaderHeight);
            const up = self.client.up;
            const landscape = (self.client.orientation === "landscape");
            const ended = self.animations.navbarAnimationEnd;

            // Get the styles of the navbar
            // = (., true, true)   : show gold navbar       - scroll up outside 
            // = (., true, false)  : show the navbar        - scroll up inside 
            // = (., false, true)  : hide the navbar        - scroll down outside
            // = (., false, false) : show the navbar        - scroll up inside
            return ended ? (landscape ? (
                up ? { 
                    backgroundColor: backgroundColorValue(passed),
                    color: colorValue(passed),
                    top: 0
                } : {
                    display: displayValue(up, passed),
                    top: 0
                }) : undefined) : undefined;
        },
        getPictureDividerStyles(src:string, aspectRatio:number, shift?:boolean, scroll?:boolean):CSS.Properties {
            const clip = self.client.clipHeight();
            const portrait = (self.client.orientation === "portrait");

            // Scale the height using the aspect ratio of the background image
            const height = ((aspectRatio > 1) ? self.client.windowHeight : (self.client.windowWidth / aspectRatio)) + 2 * clip;

            // Attach units
            const margin = -0.5 * clip + "px";
            const delta = clip + "px";
            const H = height + "px";
        
            return {
                height: H,
                backgroundAttachment: (scroll || portrait) ? 'scroll' : 'fixed', // iOS has trouble with background-attachment: fixed
                backgroundImage: `url(${ src })`,
                marginTop: portrait ? 0 : (shift ? margin : 0),
                clipPath: portrait ? 'none' : `polygon(0 ${ delta }, 100% 0, 100% calc(${ H } - ${delta}), 0 ${ H })`
            }
        },
        getPhotoSectionStyles():CSS.Properties {
            const clip = self.client.clipHeight();
            const portrait = (self.client.orientation === "portrait");
            const height = self.ui.bookSectionHeight;
            const total = height + 2 * clip;
            
            const H = (height + clip) + "px";
            const C = clip + "px";
            const M = -0.5* clip + "px";
            const T = total + "px";

            const styles = {
                marginTop: M,
                paddingTop: C,
                height: T,
                clipPath: portrait ? "none" : `polygon(0 ${ T }, 100vw ${ H }, 100vw 0, 0 ${ C })`
            };

            return (height === 0) ? undefined : styles;
        },
        getDividerStyles(height: string, shiftTop?: boolean, shiftBottom?: boolean):CSS.Properties {
            const clip = self.client.clipHeight();
            const H = clip + "px";
        
            // Only shift down when asked
            const marginBottom = shiftBottom ? H : 0;
            const marginTop = shiftTop ? H : 0;

            const isPortrait = (self.client.orientation === "portrait");
        
            return isPortrait ? { height: 'inherit' } 
                            : {
                                height: `calc(${ height } + ${ H })`,
                                marginTop: `calc(-0.5 * ${ marginTop })`,
                                marginBottom: `calc(-0.5 * ${ marginBottom })`
                            };
        },

    }))

export default RootStore;

// Return display value
// = (false, true) : hide the navbar
// =  else         : use the scss code to show the navbar 
const displayValue = (up:boolean, passed:boolean):string => {
    return (!up && passed) ? "none" : "";
}

// Return color value
// = true          : change the color to transparent
// = false         : use the white color in the scss
const colorValue = (passed:boolean):string => {
    return passed ? COLOR_WHITE : "";
};

// Return background-color value
// = true          : change the background-color to gold
// = false         : keep the transparent background-color
const backgroundColorValue = (passed:boolean):string => {
    return passed ? COLOR_GOLD : "";   
};

spy(event => {
    if (event.type === "action") {
        console.log(`Spy: ${ event.name } with args: ${ event.arguments }`)
    }
})