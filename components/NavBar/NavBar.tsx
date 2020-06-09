import React, { useState, useCallback } from 'react';
import { useObserver } from 'mobx-react-lite';
import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../MenuNav/MenuNav';
import LogoBox from '../LogoBox/LogoBox';
// import { useResponsive } from '../../hooks/useResponsive/useResponsive';
// import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import { ResponsiveState } from '../../hooks/useResponsive/types'
import { useStore } from '../StoreProvider/StoreProvider';
import { NavBarProps } from './types';
import restrictToClient from '../../hoc/restrictToClient/restrictToClient';

const NavBar: React.FunctionComponent<NavBarProps> = ({flex, name, navItems, lastButton}): React.ReactElement => {
    const store = useStore();
    const responsive = store.client.responsiveState();

    const renderMenu = (responsive: ResponsiveState) => {
        switch (responsive) {
            case "portrait": {
                return <MenuButton navItems={ navItems } lastButton={ lastButton } />;
            }
            case "landscape": {
                return <MenuNav menu={ true } navItems={ navItems } flex={ flex } lastButton={ lastButton } />;
            }
            case "undetermined": {
                return null;
            }
        }
    };

    return useObserver( () => (        
        <div 
            className={ store.addNavBarAnimation() } 
            style={ store.getNavBarStyles() } 
            onAnimationEnd={ () => store.animations.setNavbarAnimationEnd() } >
            <LogoBox flex={ flex } name={ name } />
            { renderMenu(responsive) }
        </div>   
    ));
};

export default restrictToClient(NavBar);


