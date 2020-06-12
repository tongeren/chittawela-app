import { useRouter } from 'next/router'
import { useStore } from '../StoreProvider/StoreProvider';
import { NavItemProps } from './types';

const NavItem: React.FunctionComponent<NavItemProps> = ({ href, name }) :React.ReactElement => {
    const router = useRouter();
    const store = useStore();

    const handleClick = event => {
        event.preventDefault();

        // Close the menu modal
        store.ui.setMenuOpen(false);

        // Enable scrolling
        store.ui.setBodyStyles();

        // Scroll anchor
        router.push(href);
    };

    return (
        <li className="nav-item">
            <a href={ href } className="anchor" onClick={ handleClick }>{ name }</a> 
        </li>
    );
};

export default NavItem;

