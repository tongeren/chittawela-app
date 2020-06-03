/* eslint-disable */
import React from 'react';
import { useStore } from '../stores/stores';
import initFirebase from '../utils/initFirebase';
import { StoreProvider } from '../components/StoreProvider/StoreProvider';
//import { initStore } from '../stores/stores';
import 'mobx-react-lite/batchingForReactDom';

import '../sass/main.scss';

// Initialize the Firebase app
initFirebase();

// Initialize mobx store
// const store = initStore();

const Root = ({ Component, pageProps}) => {
    const store = useStore(pageProps.initialState);

    return (
        <StoreProvider value={ store }>
            <Component { ...pageProps } />
        </StoreProvider>
    );
};

export default Root;





// import { Provider } from 'mobx-react';
// const Root = ({ Component, pageProps}) => {
//     const store = useStore(pageProps.initialState);

//     return (
//         <Provider store={ store }>
//             <Component { ...pageProps } />
//         </Provider>
//     );
// };