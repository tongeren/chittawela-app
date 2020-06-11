 // @ts-nocheck: JS Fullscreen API is not supported by Typescript as of June 2020
 // See https://caniuse.com/#feat=fullscreen

const enableFullScreen = () => {
    document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

    if (document.fullscreenEnabled) {
        requestFullscreen(document.documentElement);
    };
};

const requestFullscreen = (element) => {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(element.ALLOW_KEYBOARD_INPUT);
	}
};

export default enableFullScreen;