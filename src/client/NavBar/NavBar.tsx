import React from 'react';
import { useObserver } from 'mobx-react-lite';
import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../../components/MenuNav/MenuNav';
import LogoBox from '../../components/LogoBox/LogoBox';
import { useStore } from '../../components/StoreProvider/StoreProvider';
import { NavBarProps } from './types';

const NavBar: React.FunctionComponent<NavBarProps> = ({flex, name, navItems, lastButton}): React.ReactElement => {
    const store = useStore();
   
    const renderMenu = (orientation) => {
        switch (orientation) {
            case "portrait": {
                return <MenuButton navItems={ navItems } lastButton={ lastButton } />;
            }
            case "landscape": {
                return <MenuNav menu={ true } navItems={ navItems } flex={ flex } lastButton={ lastButton } />;
            }
            default: {
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
            { renderMenu(store.client.orientation) }
        </div>   
    ));
};

NavBar.displayName = "NavBar";

export default NavBar;


