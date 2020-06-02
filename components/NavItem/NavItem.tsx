/* eslint react/prop-types: 0 */
import React from 'react';
import Anchor from '../Anchor/Anchor';
import { NavItemProps } from './types';

const NavItem: React.FunctionComponent<NavItemProps> = ({ href, name }) :React.ReactElement => {
    return (
        <li className="nav-item">
            <Anchor href={ href } name={ name }/>
        </li>
    );
};

export default NavItem;

