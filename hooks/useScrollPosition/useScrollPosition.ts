import { useState, useEffect } from 'react';
import { ScrollPositionObject, UsePositionHook } from './types';
import _ from 'lodash';

const THROTTLE_TIME = 1000; // ms

// Get the scroll position
const getScrollPosition: (x: void) => ScrollPositionObject = (x: void) => {
    return { 
        scrollX: window.scrollX, 
        scrollY: window.scrollY
    };
};

const useScrollPosition: (x: void) => ScrollPositionObject | null = (x: void) => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPositionObject | null>(null);

    useEffect(() => {
        if (window) {

            // Determine the scroll position
            const determinePosition = () => {
                // Allow for animations to run first and then set the scroll position
                return window.requestAnimationFrame(
                    () => setScrollPosition(getScrollPosition())
                );
            };

            determinePosition();

            const handleScroll = _.throttle(determinePosition, THROTTLE_TIME);

            window.addEventListener('scroll', handleScroll, true);
            return () => window.removeEventListener('scroll', handleScroll, true);
        }
    }, [window]);

    return scrollPosition;
};

export default useScrollPosition;