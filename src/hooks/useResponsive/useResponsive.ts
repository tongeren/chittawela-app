import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { ResponsiveState } from './types';
import { THROTTLE_TIMES } from '../throttle';

const IPAD_WIDTH = 768;

export const useResponsive = ():ResponsiveState => {
    const hasWindow = typeof window !== 'undefined';

    function getResponsiveState():ResponsiveState {
        return hasWindow 
            ? (((window.orientation === 0) && (window.innerWidth < IPAD_WIDTH)) 
                ? "portrait" : "landscape") 
            : "undetermined";
    }

    const [responsiveState, setResponsiveState] = useState(getResponsiveState());

    useEffect(() => {
        if (hasWindow) {
            
            // Define the measure function
            const determine = () => {
                // Allow for animations to run first and then set the dimensions
                return window.requestAnimationFrame(
                    () => setResponsiveState(getResponsiveState())
                );
            };

            // Determine responsive state
            determine();

            // Define event handlers, use throttling to reduce performance impact
            const handleResize = throttle(determine, THROTTLE_TIMES.resize);
            const handleOrientationChange = throttle(determine, THROTTLE_TIMES.orientation);     

            window.addEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleOrientationChange );

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('orientationchange', handleOrientationChange);
            };
        }
    });

    return responsiveState;
}
