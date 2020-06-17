import dynamic from 'next/dynamic';
import { useStore } from '../stores/stores';
import initFirebase from '../config/firebase/initFirebase';
import Loading from '../components//Loading/Loading';
const Client = dynamic( 
    () => import('../components/Client/Client'), 
    { loading: () => <Loading />, ssr: false } 
);
// import Client from '../components/Client/Client';
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

    return (
        <StoreProvider value={ store }>
            <Client>
                <Component { ...pageProps } />
            </Client>          
        </StoreProvider> 
    );
};

Root.displayName = "Root";

export default Root;
