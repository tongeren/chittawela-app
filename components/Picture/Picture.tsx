import React, { useRef, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { PictureProps } from './types';

const Picture: React.FunctionComponent<PictureProps> = ({ classes, sources, image }):React.ReactElement => {    
    const store = useStore(); 
    const observed = useRef(null);

    useEffect(() => {
        const picture = observed.current;
        const height = picture.getBoundingClientRect().height;
        store.ui.setImageHeight(height);
    }, [observed, store.ui]);

    return useObserver( () => (
        <picture ref={ observed }  className={ classes }> 
            { sources.map((deviceSource, key) => {
                    const { device, source } = deviceSource;
                    return <source key={ key } { ...source } />
                }
            )}
            <img { ...image } />
        </picture>
    ));
};

export default Picture;