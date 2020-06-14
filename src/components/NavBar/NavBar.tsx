import React from 'react';
import { useObserver } from 'mobx-react-lite';
import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../MenuNav/MenuNav';
import LogoBox from '../LogoBox/LogoBox';
import { useStore } from '../StoreProvider/StoreProvider';
import { INavItem } from '../NavItem/NavItem';
import { Flex } from '../../types/types';

export interface INavBar {
    flex: Flex
    name: string
    navItems: INavItem[]
    lastButton: boolean
}


const NavBar: React.FunctionComponent<INavBar> = ({flex, name, navItems, lastButton}): React.ReactElement => {
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


