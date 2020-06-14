import { types } from "mobx-state-tree";
import calcClipHeight from "../helpers/calcClipHeight";
import { ResponsiveState } from '../../hooks/useResponsive/types';
import { ScreenOrientationPS } from '../../helpers/orientation/types';
import CSS from 'csstype';

const IPAD_WIDTH = 768;

export const Client = types
    .model("Client", {
        windowWidth: types.number,
        windowHeight: types.number,
        scrollX: types.number,
        scrollY: types.number,
        orientation: types.string,
        isMobile: types.boolean,
        up: types.boolean,
    })
    .actions(self => ({
        setWindowWidth(width: number):void {
            self.windowWidth = width;
        },
        setWindowHeight(height: number):void {
            self.windowHeight = height;
        },
        setScrollX(scrollX: number):void {
            self.scrollX = scrollX;
        },
        setScrollY(scrollY: number):void {
            self.up = (scrollY - self.scrollY) > 0; 
            self.scrollY = scrollY;
        },
        setOrientation(orientation: ScreenOrientationPS):void {
            self.orientation = orientation;
        },
        setIsMobile(mobile:boolean):void {
            self.isMobile = mobile;
        }
    }))
    .views(self => ({
        clipHeight(): number {
            return (self.windowWidth === 0) ? 0 : calcClipHeight(self.windowWidth);
        },
        passedHeader(height: number):boolean {
            return self.scrollY > height - this.clipHeight();
        },
        // responsiveState():ResponsiveState {
        //     const isPortrait = (self.orientation === "portrait");
        //     const isLandscape = (self.orientation === "landscape");
            
        //     // Navbar responds in "landscape" mode in Chrome on iPhone 6S Plus !?! No css pixels?!?
        //     // const isPortrait = (self.orientation === "portrait") && (self.windowWidth < IPAD_WIDTH);
        //     const state = isPortrait ? "portrait" : (
        //         isLandscape ? "landscape" : "undetermined"
        //     );
        //     console.log("responsiveState:", state )
        //     return state;
        // },
        getFooterClippingStyles():CSS.Properties {
            const height = calcClipHeight(self.windowWidth);
            const isPortrait = (self.orientation === "portrait");

            const H = height + "px";

            return isPortrait ? { display: 'none' } 
                : {
                    height: H, 
                    clipPath: `polygon(0 ${ H }, 100vw 0, 100vw ${ H })`
                }; 
        }
        

    }))

    

    