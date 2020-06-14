/* eslint-disable */
import { Fragment } from 'react';
import { useStore } from '../stores/stores';
import { useMounted } from '../hooks/useMounted/useMounted';
import initFirebase from '../utils/initFirebase';
import Client from '../client/Client/Client';
import Loading from '../components/Loading/Loading';
// import dynamic from 'next/dynamic';
// const Client = dynamic(() => import('../components/Client/Client'), {ssr: false })
import { StoreProvider } from '../components/StoreProvider/StoreProvider';
import 'mobx-react-lite/batchingForReactDom'; // Enable batchin9
import '../sass/main.scss';

// Initialize the Firebase app
initFirebase();

// Report Core Web Vitals. Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    // TO DO: send to MATOMO server
    console.log(metric)
};

const Root = ({ Component, pageProps}) => {
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