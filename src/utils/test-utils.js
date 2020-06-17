// See https://testing-library.com/docs/react-testing-library/setup#custom-render
/* @ts-nocheck */
import React, { Fragment } from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useMounted } from '../hooks/useMounted/useMounted';
import { StoreProvider } from '../components/StoreProvider/StoreProvider';
import Client from '../components/Client/Client';
import Loading from '../components/Loading/Loading';
import { useStore } from '../stores/stores';
import { createStore } from '../stores/createStore';
import 'mobx-react-lite/batchingForReactDom';
// import '../../sass/main.scss';

// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface CustomRenderProps {
//     ui: React.ReactElement<any>
//     options?: { 
//         container?: HTMLElement,
//         baseElement?: HTMLElement,
//         hydrate?: boolean,
//         wrapper?: React.ReactElement,
//         queries?: Queries  
//     }
// }

const AllTheProviders = ({ children }) => {
    const _root = createStore();
    const store = useStore(_root);
    const mounted = useMounted();

    return (
        <Fragment>{
                mounted ? 
                <StoreProvider value={ store }>
                    <Client>
                        { children }
                    </Client>          
                </StoreProvider> :
                <Loading /> }    
        </Fragment>
    );
};

const customRender = (ui, options) => {
    options ? options.hydrate = true : options = { hydrate: true }; // Always test server rendering as well
    return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render };