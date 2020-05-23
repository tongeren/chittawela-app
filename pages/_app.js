import { Provider } from 'mobx-react';
import { useStore } from '../stores/UIStore';
import initFirebase from '../utils/initFirebase';
import 'mobx-react-lite/batchingForReactDom';
import '../sass/main.scss';

// init the Firebase app
initFirebase();

const MyApp = props => {
    const { Component, pageProps } = props;
    const store = useStore();
    
    return (
        <Provider store={ store }>
            <Component { ...pageProps } />
        </Provider>
    );
};

export default MyApp;