import { storesContext } from '../contexts/index';

const StoresContext = storesContext;

const withStoresContext = WrappedComponent => {
    const WithStoresContext = props => {
        return (
            <StoresContext.Provider value={ StoresContext } >
                <WrappedComponent { ...props } />
            </StoresContext.Provider>
        );
    };
    
    WithStoresContext.displayName =  `withStoresContext(${getDisplayName(WrappedComponent)})`;

    return WithStoresContext;
};

export default withStoresContext;