import React, { useRef, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';

export interface ISource {
    device?: string
    source : {
        media: string
        srcSet: string
        sizes?: string
    }
}

export interface IImage  {
    className?: string
    src: string
    alt: string
}

export interface IPicture {
    classes?: string
    sources: ISource[]
    image: IImage
}

const Picture: React.FunctionComponent<IPicture> = ({ classes, sources, image }):React.ReactElement => {    
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

Picture.displayName = "Picture";

export default Picture;