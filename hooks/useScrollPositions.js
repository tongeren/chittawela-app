import { useState, useEffect } from 'react';
import _ from 'lodash';

const useScrollPositions = () => {
    const hasWindow = typeof window !== 'undefined';

    function getScrollPositions() {
        const scrollY = hasWindow ? window.scrollY : null;
        const scrollX = hasWindow ? window.scrollX : null;
    
        return { scrollX, scrollY };
    }

    const [scrollPositions, setScrollPositions] = useState(getScrollPositions());

    useEffect(() => {
        if (hasWindow) {
            function handleScroll() {
                setScrollPositions(getScrollPositions());
            }

            window.addEventListener('scroll', _.throttle(handleScroll, 1000), true);
            return () => window.removeEventListener('scroll', _.throttle(handleScroll, 1000), true);
        }
    }, [hasWindow]);

    return scrollPositions;
};

export default useScrollPositions;