import { types } from "mobx-state-tree";

export const Animations = types
    .model("Animations", {
        ctaButtonAnimationEnd: types.boolean,
        navbarAnimationEnd: types.boolean
    })
    .actions(self => ({
        setCTAButtonAnimationEnd():void {
            self.ctaButtonAnimationEnd = true;
        },
        setNavbarAnimationEnd():void {
            self.navbarAnimationEnd = true;
        }
    }))
   
    
    
    
   