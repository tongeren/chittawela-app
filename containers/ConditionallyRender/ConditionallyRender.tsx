import { Fragment, useEffect, useState } from 'react';
import { ConditionallyRenderProps } from './types';

const ConditionallyRender:React.FunctionComponent<ConditionallyRenderProps> = ({ server, client, children }):React.ReactElement => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    if (!isMounted && client) { return null; }
    if (isMounted && server) { return null; }

    return ( 
        <Fragment>
            { children }
        </Fragment>
    );
};

ConditionallyRender.displayName = "ConditionallyRender";

export default ConditionallyRender;