import { useState, useCallback, FunctionComponent } from 'react';

export interface INaviToggle {
    initialState: boolean
}

const NaviToggle:FunctionComponent<INaviToggle> = ({ initialState }):React.ReactElement => {
    const [checked, setChecked ] = useState(initialState);

    const toggle = check => setChecked(!check);

    return (
        <div className="navi-toggle">
            <input 
                className="navi-toggle__checkbox" 
                id="toggle" 
                type="checkbox" 
                checked={ checked  } 
                onChange={ () => toggle(checked) }
            />   
            <label className="navi-toggle__button" htmlFor="toggle"> 
                <span id="icon" className="navi-toggle__icon"></span> 
            </label>
        </div>
    );
};

NaviToggle.displayName = "NaviToggle";

export default NaviToggle;

// const Parent = () => {
//     const [ globalState, setGlobalState ] = useState( false );

//     const toggle = globalState => setGlobalState(!globalState); 

//     return (
//         <NaviToggle initialState={ false } />
//     );
// };
