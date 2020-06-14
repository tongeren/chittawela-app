import React, { useRef, useEffect } from 'react';
import { StandardEvent } from './types';

export const useEventListener = (
    eventName: StandardEvent, 
    handler: (event: Event) => void, 
    element: HTMLElement | Window & typeof globalThis
): void => {
    // Create a ref that will store the handler
    const savedHandler: React.MutableRefObject<(event: Event) => void> = useRef(); 
    
    useEffect(() => {
        // Store the handler
        savedHandler.current = handler;
    }, [ handler ] ); // Re-run if handler changes

    useEffect(() => {
        // Make sure element supports adding an addEventListener
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        // Create event listener that calls handler function stored in ref
        const eventListener = (event: Event) => savedHandler.current(event);
       
        // Add event listener
        element.addEventListener(eventName, eventListener, true);
        
        // Remove event listener on cleanup
        return () => {
            element.removeEventListener(eventName, eventListener, true);
        };
    }, [ eventName, element ] ); // Re-run if eventName or element changes

};