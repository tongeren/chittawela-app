import { Fragment, useState, useCallback, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import { useResponsive } from '../../hooks/useResponsive/useResponsive';
import restrictToClient from '../../hoc/restrictToClient'; // I should only use this here and nowhere else
import _ from 'lodash';

const measureDimensions = (window) => {
    const { innerWidth, innerHeight } = window;
    return { windowWidth: innerWidth, windowHeight: innerHeight };
}

// const measureScrollCoords = (window) => {
//     const { scrollX, scrollY } = window;
//     return { scrollX: scrollX, scrollY: scrollY };
// }

const Client = ({ children }) => {
    const store = useStore();

    const [ windowDimensions, setWindowDimensions ] = useState(measureDimensions(window)) 
    const [ scrollCoords, setScrollCoords ] = useState({ scrollX: 0, scrollY: 0 }); // scroll position does not exist on load
    const responsive = useResponsive();

    const scrollHandler = useCallback(
        event => {
            console.log("Client - scrollHandler: triggered, event", event);
            const window = event.currentTarget.window;
            console.log("Client - scrollHandler: window", window);
            
            const scrollX =  window.scrollX;
            const scrollY =  window.scrollY;
            //const coordinates = measureScrollCoords(window);
            const coordinates = { scrollX: scrollX, scrollY: scrollY };
            
            console.log("Client - scrollHandler: event.currentTarget, scrollX, scrollY", event.currentTarget, coordinates.scrollX, coordinates.scrollY);
            // Update coordinates
            setScrollCoords(coordinates); 
        },
        [ setScrollCoords ]
    );

    const dimensionsChangeHandler = useCallback(
        event => {
            const window = event.currentTarget;
            const dimensions = measureDimensions(window)

            console.log("Client - dimensionsChangeHandler: windowWidth, windowHeight", dimensions.windowWidth, dimensions.windowHeight);
            // Update dimensions
            setWindowDimensions(dimensions);
        },
        [ setWindowDimensions ]
    );

    useEventListener('resize', _.throttle(dimensionsChangeHandler, 50), window);
    useEventListener('orientationchange', _.throttle(dimensionsChangeHandler, 50), window);
    useEventListener('scroll', scrollHandler, window);

    console.log("Client: scrollCoords", scrollCoords);    

    // measureDimensions(window);
    if (!(responsive === undefined)) store.client.setResponsiveState(responsive);
    if (!(scrollCoords.scrollX === undefined)) store.client.setScrollX(scrollCoords.scrollX);
    if (!(scrollCoords.scrollY === undefined)) store.client.setScrollY(scrollCoords.scrollY);
    if (!(windowDimensions.windowHeight === undefined)) store.client.setWindowHeight(windowDimensions.windowHeight);
    if (!(windowDimensions.windowWidth === undefined)) store.client.setWindowWidth(windowDimensions.windowWidth);

    return useObserver( () => 
        <Fragment>
            { children }
        </Fragment> 
    );
};

export default restrictToClient(Client);