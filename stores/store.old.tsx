import { observable, action } from 'mobx';
import { useStaticRendering } from 'mobx-react';
import React, { useMemo } from 'react';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store;

class Store {
    @observable ctaButtonAnimationEnd = false;

    @action setCTAButtonAnimationEnd(flag: boolean) {
        this.ctaButtonAnimationEnd = flag;
    };

};

const initStore = (initialData = null) => {
    const _store = store ?? new Store();
  
    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    // if (initialData) {
    //   _store.hydrate(initialData);
    // };

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') { return _store; };

    // Create the store once in the client
    if (!store) store = _store;
  
    return _store;
};

export const useStore = initialState => {
    const store = React.memo(() => initStore(initialState));
    return store;
};



