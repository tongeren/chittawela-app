import { Fragment } from 'react';
import Client from '../Client/Client';
import Loading from '../Loading/Loading';
import { useMounted } from '../../hooks/useMounted/useMounted';

const ClientCSR = ({ children }):React.ReactElement => {
    const mounted = useMounted();

    return (
        <Fragment>
            { mounted ? <Client>{ children }</Client> : <Loading /> }
        </Fragment>    
    );
};

ClientCSR.displayName = "ClientCSR";

export default ClientCSR;