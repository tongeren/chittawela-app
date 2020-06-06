import { types } from "mobx-state-tree";
import calcClipHeight from "../helpers/calcClipHeight";
import { ResponsiveState } from '../../hooks/useResponsive/types';
import CSS from 'csstype';

export const Client = types
    .model("Client", {
        windowWidth: types.number,
        windowHeight: types.number,
        scrollX: types.number,
        scrollY: types.number,
        responsive: types.string,
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
        setResponsiveState(responsive: ResponsiveState):void {
            self.responsive = responsive as string;
        }
    }))
    .views(self => ({
        clipHeight(): number {
            return (self.windowWidth === 0) ? 0 : calcClipHeight(self.windowWidth);
        },
        passedHeader(height: number):boolean {
            return self.scrollY > height - this.clipHeight();
        },       
    }))

    

    