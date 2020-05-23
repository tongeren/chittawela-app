import { createContext } from 'react';
import { useStaticRendering } from 'mobx-react';
import { UIStore } from '../stores/UIStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

export const storesContext = createContext({ 
    uiStore: new UIStore()
});


