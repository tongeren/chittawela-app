import MenuNav from '../MenuNav/MenuNav';
import { MenuModalProps } from './types';

const MenuModal:React.FunctionComponent<MenuModalProps> = ({ show, navItems, lastButton, closeModal }):React.ReactElement => {
    // const styles = show ? { display: "flex" } : { display: "none" };

    return (
        <div className={ show ? "menu-modal menu-modal--active" : "menu-modal"}> 
            <MenuNav 
                menu={ true } // REMOVE
                navItems={ navItems } 
                flex="column" 
                lastButton={ lastButton }
                closeMenu={ closeModal }
            />
        </div>
    );
} 

MenuModal.displayName = "MenuModal";

export default MenuModal;