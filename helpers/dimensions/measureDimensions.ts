import isMobile from '../mobile/isMobile';
import { WindowDimensions } from '../../types/types';

const measureDimensions = ():WindowDimensions => {
    const mobile = isMobile();

    if (mobile) {
        const { clientWidth, clientHeight } = document.documentElement; // better support than windowWidth & windowHeight on mobile browsers
        return { windowWidth: clientWidth, windowHeight: clientHeight };
    } else { 
        const { innerWidth, innerHeight } = window;
        return { windowWidth: innerWidth, windowHeight: innerHeight };
    }
};

export default measureDimensions;