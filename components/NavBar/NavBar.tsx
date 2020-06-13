import React from 'react';
import { useObserver } from 'mobx-react-lite';
import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../MenuNav/MenuNav';
import LogoBox from '../LogoBox/LogoBox';
import { useStore } from '../StoreProvider/StoreProvider';
import { ResponsiveState } from '../../hooks/useResponsive/types'
import { NavBarProps } from './types';

const NavBar: React.FunctionComponent<NavBarProps> = ({flex, name, navItems, lastButton}): React.ReactElement => {
    const store = useStore();
   
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
            { renderMenu(store.client.responsiveState()) }
        </div>   
    ));
};

NavBar.displayName = "NavBar";

export default NavBar;


