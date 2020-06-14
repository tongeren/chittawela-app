import MenuNav from '../MenuNav/MenuNav';
import { SyntheticEvent } from 'react';
import { IMenuButton } from '../MenuButton/MenuButton';

export interface IMenuModal extends IMenuButton {
    show: boolean
    closeModal: (event: SyntheticEvent) => void
}

const MenuModal:React.FunctionComponent<IMenuModal> = ({ show, navItems, lastButton, closeModal }):React.ReactElement => {

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