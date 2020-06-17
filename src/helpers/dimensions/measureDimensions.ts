import isMobile from '../mobile/isMobile';
import { WindowDimensions } from '../../types/types';

const measureDimensions = ():WindowDimensions => {
    const mobile = isMobile();

    if (mobile) {
        if (document) {
            const { clientWidth, clientHeight } = document.documentElement; // better support than windowWidth & windowHeight on mobile browsers
            return { windowWidth: clientWidth, windowHeight: clientHeight };
        } else { 
            return { windowWidth: 0, windowHeight: 0 };
        }
    } else { 
        if (window) {
            const { innerWidth, innerHeight } = window;
            return { windowWidth: innerWidth, windowHeight: innerHeight };
        } else {
            return { windowWidth: 0, windowHeight: 0 };
        }
    }
};

export default measureDimensions;