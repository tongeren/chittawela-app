import { useState, useCallback, useEffect, useRef } from 'react';
import { trace } from 'mobx';
import { useObserver, observer } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import restrictToClient from '../../hoc/restrictToClient'; // I should only use this here and nowhere else
import { determineOrientation } from '../../helpers/orientation/orientation';
import { ScreenOrientationPS } from '../../helpers/orientation/types';
import measureDimensions from '../../helpers/dimensions/measureDimensions';
import isMobile from '../../helpers/mobile/isMobile';
import _ from 'lodash';

const Client = observer( ({ children }) => {
    // Get the mobx-state-tree store
    const store = useStore();

    // Enter the debugger whenever an observable value causes this component to re-run
    trace(true);

    // Observe screen orientation as early as possible
    const observed = useRef(); 
    store.client.setIsMobile(isMobile());

    const [ windowDimensions, setWindowDimensions ] = useState(measureDimensions()) 
    const [ scrollCoords, setScrollCoords ] = useState({ scrollX: 0, scrollY: 0 }); // scroll position does not exist on load
    const [ orientation, setOrientation ] = useState("unsupported" as ScreenOrientationPS);

    useEffect( () => {
        const orientationStr = determineOrientation(window);
        setOrientation(orientationStr);
    }, [observed]);

    // Event handlers
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
            const dimensions = measureDimensions();

            // Allow for animations to run first and then set the dimensions
            return window.requestAnimationFrame(
                // Update dimensions
                () => setWindowDimensions(dimensions)
            );
        },
        [ setWindowDimensions ]
    );

    // Add event listeners
    useEventListener('resize', (event) => {
        _.throttle(dimensionsChangeHandler, 50)(event);
        _.throttle(orientationChangeHandler, 50)(event);
    }, window);
    useEventListener('orientationchange', (event) => {
        _.throttle(dimensionsChangeHandler, 50)(event);
        _.throttle(orientationChangeHandler, 50)(event);
    }, window);
    useEventListener('scroll', _.throttle(scrollHandler, 50), window);  

    // Set store values
    useEffect( () => {
        store.client.setOrientation(orientation);
        store.client.setScrollX(scrollCoords.scrollX);
        store.client.setScrollY(scrollCoords.scrollY);
        store.client.setWindowHeight(windowDimensions.windowHeight);
        store.client.setWindowWidth(windowDimensions.windowWidth);
    }, [store.client, orientation, scrollCoords, windowDimensions]);

    return (
        <div ref={ observed }>
            { children }
        </div> 
    );
    
});

Client.displayName = "Client";

export default restrictToClient(Client);