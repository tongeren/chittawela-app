import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_TIME = 50; // ms

const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
    
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    useEffect(() => {
        if (hasWindow) {
           
            window.addEventListener('resize', throttle(handleResize, THROTTLE_TIME));
            return () => window.removeEventListener('resize', throttle(handleResize, THROTTLE_TIME));
        }
    }, [hasWindow]);

    return windowDimensions;
};

export default useWindowDimensions;