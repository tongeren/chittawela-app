import { useState, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import MenuModal from '../MenuModal/MenuModal';
import { MenuButtonProps } from './types';

const MenuButton:React.FunctionComponent<MenuButtonProps> = ({ navItems, lastButton }):React.ReactElement => {
    const store = useStore();
    const [checked, setChecked ] = useState(store.ui.menuOpen);

    useEffect(() => {
        store.ui.setMenuOpen(checked);
        store.ui.setBodyStyles();
    }, [store.ui, checked]);

    return useObserver( () => (
        <div className="menu-button">
            <input 
                className="menu-button__checkbox" 
                id="navi-toggle" 
                type="checkbox" 
                checked={ store.ui.menuOpen }
                onChange={ () => {
                    store.ui.setMenuOpen(!checked);
                    setChecked(!checked);
                } }
            />   
            <label className="menu-button__button" htmlFor="navi-toggle"> 
                <span id="icon" className="menu-button__icon"></span> 
            </label>
            <div className="menu-button__nav">
                <MenuModal show={ store.ui.menuOpen } navItems={ navItems } lastButton={ lastButton } />
            </div>
        </div>
    ));
};

export default MenuButton;

