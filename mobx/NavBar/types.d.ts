import { NavItemProps } from '../../components/NavItem/types';
import { Flex } from '../../types/types';

export interface NavBarProps {
    flex: Flex
    name: string
    navItems: NavItemProps[]
    lastButton: boolean
}
