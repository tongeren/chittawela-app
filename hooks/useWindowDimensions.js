import { useState, useEffect } from 'react';
import _ from 'lodash';

const THROTTLE_TIME = 50; // ms

const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
    
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', _.throttle(handleResize, THROTTLE_TIME));
            return () => window.removeEventListener('resize', _.throttle(handleResize, THROTTLE_TIME));
        }
    }, [hasWindow]);

    return windowDimensions;
};

export default useWindowDimensions;