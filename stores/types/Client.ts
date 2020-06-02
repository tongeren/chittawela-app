import { types } from "mobx-state-tree";
import calcClipHeight from "../helpers/calcClipHeight";
import CSS from 'csstype';
import { ResponsiveState } from '../../hooks/useResponsive/types';

const COLOR_GOLD = "rgba(136, 113, 89, 1)";
const COLOR_WHITE = "white";

enum YDirection {
    Up,
    Down
}

// Return display value
// = (false, true) : hide the navbar
// =  else         : use the scss code to show the navbar 
const displayValue = (up:YDirection, passed:boolean):string => {
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

export const Client = types
    .model("Client", {
        windowWidth: types.number,
        windowHeight: types.number,
        scrollX: types.number,
        scrollY: types.number,
        responsive: types.string
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
            self.scrollY = scrollY;
        },
        setResponsiveState(responsive: ResponsiveState):void {
            self.responsive = responsive as string;
        }
    }))
    .views(self => ({
        clipHeight(): number {
            return calcClipHeight(self.windowWidth);
        },
        scrollDirection(prevScrollY: number):YDirection {
            return (prevScrollY - self.scrollY) < 0 ? YDirection.Down : YDirection.Up;
        },
        passedHeader(height: number):boolean {
            return self.scrollY > height - this.clipHeight();
        },
        
       
    }))


    
    // Get the styles of the navbar
    // = (., true, true)   : show gold navbar       - scroll up outside 
    // = (., true, false)  : show the navbar        - scroll up inside 
    // = (., false, true)  : hide the navbar        - scroll down outside
    // = (., false, false) : show the navbar        - scroll up inside
    // getNavBarStyle(prevScrollY: number, height: number):CSS.Properties {
    //     const up = scrollDirection(prevScrollY);
    //     const passed = self.passedHeader(height)
    //     return up ? { 
    //         backgroundColor: backgroundColorValue(passed),
    //         color: colorValue(passed)
    //     } : {
    //         display: displayValue(up, passed)
    //     };
    // },

    

    