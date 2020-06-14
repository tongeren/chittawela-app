import { NavItemProps } from '../NavItem/types';
import { Flex } from '../../types/types';
import { SyntheticEvent } from 'react';

export interface MenuNavProps {
    menu: boolean
    flex: Flex
    navItems: NavItemProps[]
    lastButton?: boolean,
    closeMenu?: (event: SyntheticEvent) => void
}