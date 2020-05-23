// determine whether in potrait mode
import { useState, useEffect } from 'react';

const IPAD_WIDTH = 768;

const isPortrait = () => {
    const hasWindow = typeof window !== 'undefined';

    function getPortraitState() {
        const width = hasWindow ? window.innerWidth : null;
        const orientation = hasWindow ? window.orientation : null;
    
        return ((orientation === 0) && (width < IPAD_WIDTH)) ? true : false;
    };

    const [portraitState, setPortraitState] = useState(getPortraitState());

    useEffect(() => {
        if (hasWindow) {
            function handleStateChange() {
                setPortraitState(getPortraitState());
            }

            window.addEventListener('resize', handleStateChange);
            window.addEventListener('orientationchange', handleStateChange);

            return () => {
                window.removeEventListener('resize', handleStateChange);
                window.removeEventListener('orientationchange', handleStateChange);
            };
        };
    }, [hasWindow]);

    return portraitState;
}

export default isPortrait;