import PropTypes from 'prop-types';
import MenuNav from '../MenuNav/MenuNav';

const MenuButton = ({ navItems, lastButton }) => {
    return (
        <div className="menu-button">
            <input className="menu-button__checkbox" id="navi-toggle" type="checkbox"/>   
            <div className="menu-button__background">&nbsp;</div>
            <label className="menu-button__button" htmlFor="navi-toggle"> 
                <span id="icon" className="menu-button__icon"></span> 
            </label>
            <div className="menu-button__nav">
                <MenuNav menu={ true } navItems={ navItems } flex="column" lastButton={ lastButton }/>
            </div>
        </div>
    );
};

export default MenuButton;

MenuButton.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    lastButton: PropTypes.bool
};