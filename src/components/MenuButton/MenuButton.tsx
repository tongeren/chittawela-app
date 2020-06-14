import { useState, useEffect, useCallback } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import MenuModal from '../MenuModal/MenuModal';
import { INavItem } from '../NavItem/NavItem';

export interface IMenuButton {
    navItems: INavItem[]
    lastButton: boolean
}

const MenuButton:React.FunctionComponent<IMenuButton> = ({ navItems, lastButton }):React.ReactElement => {
    const store = useStore();
    const [checked, setChecked ] = useState(store.ui.menuOpen);

    const handleModalChange = useCallback( 
        open => {
            store.ui.setMenuOpen(open);
            store.ui.toggleScrolling();
        }, [ store.ui ]
    );

    // Bring local state in line with global state again
    const updateLocalState = () => {
        setChecked(store.ui.menuOpen); 
    };

    // Change corresponding (global) store state whenever local change changes
    useEffect(() => {
        handleModalChange(checked);
    }, [ handleModalChange, checked ]);

    // Close modal 
    const closeModal = () => { 
       handleModalChange(false);
       updateLocalState(); 
    };

    return useObserver( () => (
        <div className="menu-button">
            <input 
                className="menu-button__checkbox" 
                id="navi-toggle" 
                type="checkbox" 
                checked={ checked  } 
                onChange={ () => setChecked(!checked) }
            />   
            <label className="menu-button__button" htmlFor="navi-toggle"> 
                <span id="icon" className="menu-button__icon"></span> 
            </label>
            <div className="menu-button__nav">
                <MenuModal 
                    show={ store.ui.menuOpen } 
                    navItems={ navItems } 
                    lastButton={ lastButton } 
                    closeModal={ closeModal }
                />
            </div>
        </div>
    ));
};

MenuButton.displayName = "MenuButton";

export default MenuButton;

