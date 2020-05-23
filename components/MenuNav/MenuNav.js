import PropTypes from 'prop-types';
import NavItem from '../NavItem/NavItem';
import NavButton from '../NavButton/NavButton';

const MenuNav = ({ menu, navItems, flex, lastButton }) => {
    const buttonProps = lastButton ? navItems.slice(-1)[0] : null;
    const items = lastButton ? navItems.slice(0, -1) : navItems; 

    const style = {
        flexDirection: flex
    };

    const classes = {
        "navigation": "navigation".concat(" ", menu ? "menu-nav": ""),
        "navList": "nav-list".concat(" ", menu ? "menu-nav__list": "")
    };

    return (
        <div className={ classes.navigation }>
            <ul id="nav-list" className={ classes.navList } style={ style }>
                { items.map((item, key) => 
                    <NavItem key={key} { ...item } />
                )}
                { lastButton ? <NavButton { ...buttonProps } /> : null }
            </ul>
        </div>
    );
};

export default MenuNav;

MenuNav.propTypes = {
    menu: PropTypes.bool.isRequired,
    flex: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    lastButton: PropTypes.bool
};

