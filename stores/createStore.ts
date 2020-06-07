import RootStore, { RootStoreModel } from './RootStore';

export const createStore = (): RootStoreModel => {
    return RootStore.create({
        client: { 
            windowWidth: 0,
            windowHeight: 0,
            scrollX: 0,
            scrollY: 0,
            responsive: "undetermined",
            up: false,
        },
        animations: { 
            ctaButtonAnimationEnd: false,
            navbarAnimationEnd: false
        },
        ui: { 
            imageHeight: 0,
            photoHeight: 0,
            bookSectionHeight: 0
        }
    });
};


