import { types } from "mobx-state-tree";
import CSS from 'csstype';

export const UI = types
    .model("UI", {
        imageHeight: types.number,
        photoHeight: types.number,
        bookSectionHeight: types.number,
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
    }))
    .views(self => ({
        getHeroHeightStyle():CSS.Properties {
            return {
                height: self.imageHeight + "px"
            };
        },
        
    }))