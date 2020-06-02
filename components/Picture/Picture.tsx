import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { useEventListener } from '../../hooks/useEventListener/useEventListener';
import { useMeasurements } from '../../hooks/useMeasurements/useMeasurements';
import { PictureProps } from './types';

const Picture: React.FunctionComponent<PictureProps> = ({ classes, sources, image }):React.ReactElement => {    
    // const store = useStore();
    // const [ref, dimensions] = useMeasurements();
    // const height = dimensions === undefined ? store.ui.imageHeight : dimensions.height;

    // useEffect(() => store.ui.setImageHeight(height));
    console.log("Picture: sources", sources );

    return useObserver( () => (
        <picture className={ classes }> 
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

// media={ source.media } srcSet={ source.srcSet } sizes={ source.sizes }
// ref={ ref  }


    // const [dimensions, setDimensions] = useState({width: 0, height: 0});
    // const ref = useRef(null);
    
    // useEffect(() => {
    //     const picture = ref.current;
       
    // }, [ ref ]);

    // const measure = (ele: HTMLElement): {width: number, height: number }  => {
    //     const { width, height } = ele ? ele.getBoundingClientRect() : { width: 0, height: 0 };
    //     return { width: width, height: height };
    // }

    // const measureHandler = useCallback(
    //     event => {
    //         const ele = event.currentTarget;
    //         const dimensions = measure(ele);
    //         console.log("measureHandler: measurements", dimensions);
    //         setDimensions(dimensions);
    //     },
    //     [ setDimensions ]
    // ); 

    // useEventListener('resize', measureHandler, picture);
