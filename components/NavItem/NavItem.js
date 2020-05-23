import React from 'react';
import Anchor from '../Anchor/Anchor';
import PropTypes from 'prop-types';

const NavItem = props => {
    
    return (
        <li className="nav-item">
            <Anchor { ...props } />
        </li>
    );
};

export default NavItem;

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

