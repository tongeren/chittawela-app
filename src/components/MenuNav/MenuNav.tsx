import React from 'react';
import NavItem from '../NavItem/NavItem';
import LinkAnchor from '../LinkAnchor/LinkAnchor';
import { INavItem } from '../NavItem/NavItem';
import { Flex } from '../../types/types';
import { SyntheticEvent } from 'react';

export interface IMenuNav {
    menu: boolean
    flex: Flex
    navItems: INavItem[]
    lastButton?: boolean,
    closeMenu?: (event: SyntheticEvent) => void
}

const MenuNav:React.FunctionComponent<IMenuNav> = ({ menu, navItems, flex, lastButton, closeMenu }):React.ReactElement => {
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
                    <NavItem 
                        key={key} 
                        { ...item } 
                        onClick={ closeMenu }
                    />
                )}
                { lastButton && 
                <LinkAnchor 
                    classes="button--white-transparent button--interact-gold" 
                    { ...buttonProps }
                    onClick={ closeMenu }
                /> }
            </ul>
        </div>
    );
};

MenuNav.displayName = "MenuNav";

export default MenuNav;

//<NavButton navItem={ buttonProps } />
