import { types } from "mobx-state-tree";

export const Animations = types
    .model("Animations", {
        ctaButtonAnimationEnd: types.boolean
    })
    .actions(self => ({
        setCTAButtonAnimationEnd():void {
            self.ctaButtonAnimationEnd = true;
        }
    }))
    .views(self => ({
        addNavBarAnimation():string {
            const classes = "navbar";
            return self.ctaButtonAnimationEnd ? classes.concat(" ", "navbar--animated") : classes;
        }
    }))
    
    
    
    
   