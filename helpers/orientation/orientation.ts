import { ScreenOrientationPS } from './types';

const matchMedia = (window: Window) => {
    const _isPortrait = window.matchMedia("(orientation: portrait)");

    if (_isPortrait === undefined ) return "unsupported"; 

    const mediaOrientation = _isPortrait ? "portrait" : "landscape";

    console.log("mediaOrientation: mediaOrientation");

    return mediaOrientation; 
};

const screenOrientation = (window: Window):ScreenOrientationPS => {
    // window.screem has good support still
    const _screen = window.screen;

    // window.screen.orientation (experimental)
    // See https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation 
    // Not supported: Safari, Android webview, Opera for Android, Safari on iOS
    const _orientation = _screen.orientation;

    console.log("window.screen.orientation", _screen.orientation);

    // Bail out early if not supported
    if (_orientation === undefined ) return "unsupported"; 

    const orientationType = _orientation.type;

    console.log("window.screen.orientation.type", _orientation.type);

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
    console.log("window.orientation", window.orientation);

    // Bail out early if not supported
    if (orientationAngle === undefined ) return "unsupported"; 

    switch (orientationAngle) {
        case 0 || 180: return "landscape";
        case -90 || 90: return "portrait";
        default: return "unsupported"
    }
}

export const determineOrientation = (window: Window):ScreenOrientationPS => {
    const viaScreen = screenOrientation(window);
    const isScreenSupported = !(viaScreen === "unsupported");
    console.log("viaScreen", viaScreen);
    
    if (isScreenSupported) return viaScreen;

    const viaWindow = windowOrientation(window);
    const isWindowSupported = !(viaScreen === "unsupported");
    console.log("viaWindow", viaWindow);

    if (isWindowSupported) return viaWindow;

    const viaMedia = matchMedia(window);
    const isMediaSupported = !(viaMedia === "unsupported");
    console.log("viaMedia", viaMedia);

    if (isMediaSupported) return viaMedia;

    return "unsupported";
}