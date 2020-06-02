/* eslint-disable */
import React, { useEffect, useState } from 'react';

const ConditionallyRender = ({ server, client, children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    if (!isMounted && client) { return null; }
    if (isMounted && server) { return null; }

    return children;
};

export default ConditionallyRender;