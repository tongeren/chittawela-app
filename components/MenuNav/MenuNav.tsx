import React from 'react';
import NavItem from '../NavItem/NavItem';
import NavButton from '../NavButton/NavButton';
import { MenuNavProps } from './types';

const MenuNav:React.FunctionComponent<MenuNavProps> = ({ menu, navItems, flex, lastButton }):React.ReactElement => {
    const buttonProps = lastButton ? navItems.slice(-1)[0] : null;
    const items = lastButton ? navItems.slice(0, -1) : navItems; 

    const style = {
        flexDirection: flex
    };

    const classes = {
        "navigation": "navigation".concat(" ", menu ? "menu-nav": ""),
        "navList": "nav-list".concat(" ", menu ? "menu-nav__list": "")
    };

    return (
        <div className={ classes.navigation }>
            <ul id="nav-list" className={ classes.navList } style={ style }>
                { items.map((item, key) => 
                    <NavItem key={key} { ...item } />
                )}
                { lastButton ? <NavButton navItem={ buttonProps } /> : null }
            </ul>
        </div>
    );
};

MenuNav.displayName = "MenuNav";

export default MenuNav;


