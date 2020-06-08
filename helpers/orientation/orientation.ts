import { ScreenOrientation, ScreenOrientationPS } from './types';

const screenOrientation = (window: Window):ScreenOrientationPS => {
    // window.screen.orientation (experimental)
    // See https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation 
    // Not supported: Safari, Android webview, Opera for Android, Safari on iOS    
    const orientationType = window.screen.orientation.type;

    console.log("orientationType", orientationType);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    switch (orientationType as any) { 
        case "portrait-primary" || "portrait-secondary": return "portrait";
        case "landscape-primary" || "landscape-secondary": return "landscape";
        default: return "unsupported";
    }    
}

const windowOrientation = (window: Window):ScreenOrientationPS => {
    // window.orientation (deprecated)
    // See https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation
    // Not supported: Chrome, Edge, Firefox - Unknown: Internet Explorer, Opera, Safari
    const orientationAngle = window.orientation;
    console.log("orientationAngle", orientationAngle);

    switch (orientationAngle) {
        case 0 || 180: return "landscape";
        case -90 || 90: return "portrait";
        default: return "unsupported"
    }
}

export const determineOrientation = (window: Window):ScreenOrientationPS => {
    const orientationStr = (!(screenOrientation(window) === "unsupported")) ? screenOrientation(window) : windowOrientation(window);
    return orientationStr;
}