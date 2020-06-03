import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import { Client } from './types/Client';
import { Animations } from './types/Animations';
import { UI } from './types/UI';
import insertKeyFrameRules from '../helpers/insertKeyFrameRules';

const KEYFRAMES_NAME ="clippingHeader";

export type RootStoreModel = Instance<typeof RootStore>;
export type RootStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type RootStoreSnapshotOut = SnapshotOut<typeof RootStore>;

const RootStore = types
    .model("RootStore", {
        client: Client,
        animations: Animations,
        ui: UI,
        inserted: false
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
                console.log("RootStore; ", cssText);
                self.inserted = true;
            }
        }
    }))
    .views(self => ({
        addHeroAnimation():string {
            const classes = "hero";
            return ((self.client.responsive === "landscape") && self.animations.ctaButtonAnimationEnd) 
                ? classes.concat(" ", "hero--animated") 
                : classes;
        }
    }))

export default RootStore;
