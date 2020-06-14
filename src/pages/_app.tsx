
import { Fragment } from 'react';
import { useStore } from '../stores/stores';
import { useMounted } from '../hooks/useMounted/useMounted';
import initFirebase from '../config/firebase/initFirebase';
import Client from '../client/Client/Client';
import Loading from '../components/Loading/Loading';
import { StoreProvider } from '../components/StoreProvider/StoreProvider';
import 'mobx-react-lite/batchingForReactDom'; // Enable batching
import '../sass/main.scss';

// Initialize the Firebase app
initFirebase();

// Report Core Web Vitals. Will be called once for every metric that has to be reported.
/* eslint-disable-next-line */
export const reportWebVitals = (metric: any):void => {
    // These metrics can be sent to any analytics service
    // TO DO: send to MATOMO server
    console.log(metric)
};

const Root = ({ Component, pageProps}):React.ReactElement => {
    const store = useStore(pageProps.initialState);
    const mounted = useMounted();

    return (
        <Fragment>
            { mounted ? 
                <StoreProvider value={ store }>
                    <Client>
                        <Component { ...pageProps } />
                    </Client>          
                </StoreProvider> 
             : <Loading /> }
        </Fragment>
    );
};

Root.displayName = "Root";

export default Root;
