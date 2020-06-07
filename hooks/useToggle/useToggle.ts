import { useCallback, useState } from 'react';
import { UseToggleObject } from './types';

export const useToggle = (initialState = false):UseToggleObject => {
    const [state, setState] = useState(initialState);
    
    const toggle = useCallback(() => { 
        console.log("useToggle callback: state, !state", state, !state); 
        setState(state => !state);
    }, []);

    return [state, toggle];
}
