import { useState, useCallback, useEffect, useRef } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import restrictToClient from '../../hoc/restrictToClient'; // I should only use this here and nowhere else
import { determineOrientation } from '../../helpers/orientation/orientation';
import { ScreenOrientationPS } from '../../helpers/orientation/types';
import _ from 'lodash';

const measureDimensions = (window) => {
    const { innerWidth, innerHeight } = window;
    return { windowWidth: innerWidth, windowHeight: innerHeight };
}

const Client = ({ children }) => {
    const store = useStore();
    const observed = useRef(); // observe screen orientation as early as possible

    const [ windowDimensions, setWindowDimensions ] = useState(measureDimensions(window)) 
    const [ scrollCoords, setScrollCoords ] = useState({ scrollX: 0, scrollY: 0 }); // scroll position does not exist on load
    const [ orientation, setOrientation ] = useState("unsupported" as ScreenOrientationPS);

    useEffect( () => {
        const orientationStr = determineOrientation(window);
        setOrientation(orientationStr);
    }, [observed]);

    const orientationChangeHandler = useCallback(
        event => {
            // const window = event.currentTarget.window;   
            const orientationStr = determineOrientation(window);
            setOrientation(orientationStr);      
        },
        [ setOrientation ]
    )

    const scrollHandler = useCallback(
        event => {        
            // const window = event.currentTarget.window;
            const scrollX =  window.scrollX;
            const scrollY =  window.scrollY;
            const coordinates = { scrollX: scrollX, scrollY: scrollY };

            // Allow for animations to run first and then set the dimensions
            return window.requestAnimationFrame(
                // Update coordinates
                () => setScrollCoords(coordinates)
            ); 
        },
        [ setScrollCoords ]
    );

    const dimensionsChangeHandler = useCallback(
        event => {
            // const window = event.currentTarget;
            const dimensions = measureDimensions(window)

            // Allow for animations to run first and then set the dimensions
            return window.requestAnimationFrame(
                // Update dimensions
                () => setWindowDimensions(dimensions)
            );
        },
        [ setWindowDimensions ]
    );

    useEventListener('resize', (event) => {
        _.throttle(dimensionsChangeHandler, 50)(event);
        _.throttle(orientationChangeHandler, 50)(event);
    }, window);
    useEventListener('orientationchange', (event) => {
        _.throttle(dimensionsChangeHandler, 50)(event);
        _.throttle(orientationChangeHandler, 50)(event);
    }, window);
    useEventListener('scroll', _.throttle(scrollHandler, 50), window);  

    // Set store client states as soon as they become available
    // if (!(orientation === "unsupported")) store.client.setOrientation(orientation);
    // if (!(scrollCoords.scrollX === undefined)) store.client.setScrollX(scrollCoords.scrollX);
    // if (!(scrollCoords.scrollY === undefined)) store.client.setScrollY(scrollCoords.scrollY);
    // if (!(windowDimensions.windowHeight === undefined)) store.client.setWindowHeight(windowDimensions.windowHeight);
    // if (!(windowDimensions.windowWidth === undefined)) store.client.setWindowWidth(windowDimensions.windowWidth);

    useEffect( () => {
        store.client.setOrientation(orientation);
        store.client.setScrollX(scrollCoords.scrollX);
        store.client.setScrollY(scrollCoords.scrollY);
        store.client.setWindowHeight(windowDimensions.windowHeight);
        store.client.setWindowWidth(windowDimensions.windowWidth);
    }, [store.client, orientation, scrollCoords, windowDimensions])

    return useObserver( () => 
        <div ref={ observed }>
            { children }
        </div> 
    );
};

export default restrictToClient(Client);