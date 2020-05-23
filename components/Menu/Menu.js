// 
//  non-portrait mode: Nav
//  portrait:          Nav MenuButton
//
//
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';

const Menu = ({ menuNav }) => 
    <div className="menu">
        { menuNav }
        <MenuButton />
    </div>;

export default Menu;

Menu.propTypes = {
    menuNav: PropTypes.element.isRequired
};