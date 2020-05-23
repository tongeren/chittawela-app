import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ConditionallyRender = ({ server, client, children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    if (!isMounted && client) { return null; };
    if (isMounted && server) { return null; };

    return children;
};

export default ConditionallyRender;

ConditionallyRender.propTypes = {
    server: PropTypes.bool,
    client: PropTypes.bool,
    children: PropTypes.node.isRequired
};