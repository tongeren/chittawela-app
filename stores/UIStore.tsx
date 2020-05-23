import { observable, action } from 'mobx'; // later on add computed
import { useStaticRendering } from 'mobx-react';
import { useMemo } from 'react';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store;

export class UIStore {
    // animations
    @observable ctaButtonAnimationEnd = false;

    @action setCTAButtonAnimationEnd(flag: boolean) {
        this.ctaButtonAnimationEnd = flag;
    };

    // window properties
    @observable windowWidth = 0;
    @observable windowHeight = 0;

    @observable scrollX = 0;
    @observable scrollY = 0;

    scrollPrevX = 0;
    scrollPrevY = 0;

    @action setScrollY(pos: number) {
        this.scrollPrevY = this.scrollY;
        this.scrollY = pos;
    };

    







};

export const initStore = (initialState = null) =>  {
    const _store = store ?? new UIStore();

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') { return _store; };
    // Create the store once in the client
    if (!store) store = _store;
  
    return _store;
};   

export const useStore = (initialState) => {
    const store = useMemo(
        () => initStore(initialState), [ initialState ]
    );
    return store;
};

// handleScroll = (event) => {
//     this.setState( prevState => ({
//         prevScrollY: prevState.currScrollY,
//         currScrollY: event.target.scrollTop
//     }));
// };

// scrollingUp = state => {
//     const up = (state.prevScrollY < state.currScrollY);
//     return up;
// };

// passedHeader = (props, state) => {
//     const hero = document.getElementById("hero");
//     if (hero === null) { return !passed };

//     const height = document.getElementById("hero").getBoundingClientRect().height;
//     const clip = calcClipHeight(props.windowWidth);
//     const rightHeaderHight = height - clip;

//     const passed = (state.currScrollY > rightHeaderHight);

//     return passed;
// };

// // Get the styles of the navbar
// // = (., true, true)   : show gold navbar       - scroll up outside 
// // = (., true, false)  : show the navbar        - scroll up inside 
// // = (., false, true)  : hide the navbar        - scroll down outside
// // = (., false, false) : show the navbar        - scroll up inside
// getStyleProperties = (up, passed) => {
//     return up ? { 
//         backgroundColor: this.backgroundColorValue(passed),
//         color: this.colorValue(passed)
//     } : {
//         display: this.displayValue(up, passed)
//     };
// };

// // Return display value
// // = (false, true) : hide the navbar
// // =  else         : use the scss code to show the navbar 
// displayValue = (up, passed) => {
//     return (!up && passed) ? "none" : "";
// };

// // Return background-color value
// // = true          : change the background-color to gold
// // = false         : keep the transparent background-color
// backgroundColorValue = passed => {
//     return passed ? COLOR_GOLD : "";   
// };

// // Return color value
// // = true          : change the color to transparent
// // = false         : use the white color in the scss
// colorValue = passed => {
//     return passed ? COLOR_WHITE : "";
// };

// debugText = (up, passed) => {
//     const text = passed ? "show the navbar" : (up ? "show gold navbar" : "show the navbar");
//     return text;
// };

// calculateDerivedState = (props, state) => {
//     // Calculate derived state
//     const up = this.scrollingUp(state);
//     const passed = this.passedHeader(props, state);

//     return { up, passed };
// };