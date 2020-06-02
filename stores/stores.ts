import { useMemo } from 'react';
import { applySnapshot } from 'mobx-state-tree';
import { createStore } from '../stores/createStore';
import { RootStoreModel } from './RootStore';
import { useStaticRendering } from 'mobx-react-lite'; 

// Use static rendering
const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

let store: RootStoreModel | undefined;

// Note we have no data coming from the server that our stores need to be rehydrated with
export const initStore = (snapshot = null) => {
    const _store = store ?? createStore();

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        applySnapshot(_store, snapshot);
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;

    // Create the store once in the client
    if (!store) store = _store;

    return store;
};

export const useStore = (initialState: any) => {
    const store = useMemo(() => initStore(initialState), [initialState])
    return store;
};


