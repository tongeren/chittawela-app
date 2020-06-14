import { types } from "mobx-state-tree";
import CSS from 'csstype';

export type UIType = typeof UI;

export const UI = types
    .model("UI", {
        imageHeight: types.number,
        photoHeight: types.number,
        bookSectionHeight: types.number,
        playHeroVideo: types.boolean,
        menuOpen: types.boolean
    })
    .actions(self => ({
        setImageHeight(height:number):void {
            self.imageHeight = height;
        },
        setPhotoHeight(height:number):void {
            self.photoHeight = height;
        },
        setBookSectionHeight(height:number):void {
            self.bookSectionHeight = height;
        },
        setPlayHeroVideo(state: boolean):void {
            self.playHeroVideo = state;
        },
        setMenuOpen(state: boolean):void {
            self.menuOpen = state;
        }
    }))
    .views(self => ({
        getHeroHeightStyle():CSS.Properties {
            return {
                height: self.imageHeight + "px"
            };
        },
        toggleScrolling():void {
            const state = self.menuOpen;
            document.body.style.overflowY = state ? "hidden" : "scroll";
            document.body.style.position = state ? "fixed" : "static";
            document.body.style.touchAction = state ? "none" : "auto";
        }
        
    }))

//setBodyStyles()