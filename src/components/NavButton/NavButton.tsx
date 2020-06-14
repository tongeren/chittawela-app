import Anchor from '../LinkAnchor/Anchor/Anchor';
import { NavButtonProps } from './types';

const NavButton:React.FunctionComponent<NavButtonProps> = ({ navItem }):React.ReactElement => {
    return (
        <li className="button button--white-transparent">
            <Anchor { ...navItem } />
        </li>
    );
};

NavButton.displayName = "NavButton";

export default NavButton;


