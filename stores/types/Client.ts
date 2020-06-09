import { types } from "mobx-state-tree";
import calcClipHeight from "../helpers/calcClipHeight";
import { ResponsiveState } from '../../hooks/useResponsive/types';
import { ScreenOrientationPS } from '../../helpers/orientation/types';

const IPAD_WIDTH = 768;

export const Client = types
    .model("Client", {
        windowWidth: types.number,
        windowHeight: types.number,
        scrollX: types.number,
        scrollY: types.number,
        orientation: types.string,
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
        }
    }))
    .views(self => ({
        clipHeight(): number {
            return (self.windowWidth === 0) ? 0 : calcClipHeight(self.windowWidth);
        },
        passedHeader(height: number):boolean {
            return self.scrollY > height - this.clipHeight();
        },
        responsiveState():ResponsiveState {
            const isPortrait = (self.orientation === "portrait") && (self.windowWidth < IPAD_WIDTH);
            return isPortrait ? "portrait" : "landscape";
        }       
    }))

    

    