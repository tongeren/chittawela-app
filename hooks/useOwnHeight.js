import { useState, useEffect } from 'react';

const useOwnHeight = id => {
    const hasWindow = typeof window !== 'undefined';

    const htmlElement = hasWindow ? document.getElementById(id) : null;
    
    function getOwnHeight() {
        return htmlElement ? htmlElement.getBoundingClientRect().height : 0;
    }

    const [ownHeight, setOwnHeight] = useState(getOwnHeight());

    useEffect(() => {
        const htmlElement = hasWindow ? document.getElementById(id) : null;

        if (htmlElement) {
            function handleResize() {
                setOwnHeight(getOwnHeight());
            };

            htmlElement.addEventListener('resize', handleResize);
            return () => htmlElement.removeEventListener('resize', handleResize);
        }
    }, [htmlElement]);

    return ownHeight;
};

export default useOwnHeight;