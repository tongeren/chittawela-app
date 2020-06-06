import { Fragment, useState, useCallback } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import { useResponsive } from '../../hooks/useResponsive/useResponsive';

const Client = ({ children }) => {
    const store = useStore();

    const { windowWidth, windowHeight } = useWindowDimensions();
    const [scrollCoords, setScrollCoords] = useState({ scrollX: 0, scrollY: 0 });
    const responsive = useResponsive();

    const scrollHandler = useCallback(
        event => {
            const scrollX = event.currentTarget.scrollX;
            const scrollY = event.currentTarget.scrollY;
            
            console.log("Client - scrollHandler: event.currentTarget, scrollX, scrollY", event.currentTarget, scrollX, scrollY);
            // Update coordinates
            setScrollCoords({ scrollX: scrollX, scrollY: scrollY });
        },
        [ setScrollCoords ]
    );

    useEventListener('scroll', scrollHandler, window);
    console.log("Client: scrollCoords", scrollCoords);    
    if (!(responsive === undefined)) store.client.setResponsiveState(responsive);
    if (!(scrollCoords.scrollX === undefined)) store.client.setScrollX(scrollX);
    if (!(scrollCoords.scrollY === undefined)) store.client.setScrollY(scrollY);
    if (!(windowHeight === undefined)) store.client.setWindowHeight(windowHeight);
    if (!(windowWidth === undefined)) store.client.setWindowWidth(windowWidth);

    return useObserver( () => 
        <Fragment>
            { children }
        </Fragment> 
    );
};

export default Client;