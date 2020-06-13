import MenuNav from '../MenuNav/MenuNav';
import { MenuModalProps } from './types';

const MenuModal:React.FunctionComponent<MenuModalProps> = ({ show, navItems, lastButton }):React.ReactElement => {
    const styles = show ? { display: "flex" } : { display: "none" };
    
    return (
        <div className="menu-modal" style={ styles }>
            <MenuNav menu={ true } navItems={ navItems } flex="column" lastButton={ lastButton }/>
        </div>
    );
} 

MenuModal.displayName = "MenuModal";

export default MenuModal;