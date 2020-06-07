// import { useToggle } from '../../hooks/useToggle/useToggle';
import { useState } from 'react';
import MenuModal from '../MenuModal/MenuModal';
import { MenuButtonProps } from './types';

const MenuButton:React.FunctionComponent<MenuButtonProps> = ({ navItems, lastButton }):React.ReactElement => {
    const [checked, setChecked ] = useState(false);

    const toggle = () => {
        console.log("toggle");
        setChecked(!checked);
    };

    return (
        <div className="menu-button">
            <input 
                className="menu-button__checkbox" 
                id="navi-toggle" 
                type="checkbox" 
                checked={ checked }
                onInput={ toggle }
            />   
            {/* <div className="menu-button__background">&nbsp;</div> */}
            <label className="menu-button__button" htmlFor="navi-toggle"> 
                <span id="icon" className="menu-button__icon"></span> 
            </label>
            {/* <div className="menu-button__nav">
                <MenuNav menu={ true } navItems={ navItems } flex="column" lastButton={ lastButton }/>
            </div> */}
            <MenuModal show={ checked } navItems={ navItems } lastButton={ lastButton } />
        </div>
    );
};

export default MenuButton;

