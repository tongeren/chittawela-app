import { NavItemProps } from '../NavItem/types';
import { Flex } from '../../types/types';

export interface MenuNavProps {
    menu: boolean
    flex: Flex
    navItems: NavItemProps[]
    lastButton?: boolean
}