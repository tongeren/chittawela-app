import { useRouter } from 'next/router'
import { SyntheticEvent } from "react";

export interface INavItem {
    href: string
    text: string
    onClick?: (event:SyntheticEvent) => void
}

const NavItem: React.FunctionComponent<INavItem> = ({ href, text, onClick }) :React.ReactElement => {
    const router = useRouter();

    const handleClick = event => {
        onClick(event);

        // Navigate to href
        router.push(href);
    };

    return (
        <li className="nav-item">
            <a href={ href } className="anchor" onClick={ handleClick } onTouchStart={ handleClick }>{ text }</a> 
        </li>
    );
};

NavItem.displayName = "NavItem";

export default NavItem;

