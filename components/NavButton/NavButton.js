import React from 'react';
import Anchor from '../Anchor/Anchor';
import PropTypes from 'prop-types';

const NavButton = ({ href, name }) => {
    return (
        <li className="button button--white-transparent">
            <Anchor href={ href } name={ name } />
        </li>
    );
};

export default NavButton;

NavButton.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

