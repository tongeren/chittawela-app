import React, { useRef, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { PictureProps } from './types';

const Picture: React.FunctionComponent<PictureProps> = ({ classes, sources, image }):React.ReactElement => {    
    const store = useStore();
    
    const observed = useRef(null);

    useEffect(() => {
        const picture = observed.current;
        store.ui.setImageHeight(picture.getBoundingClientRect().height);
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


// const height = dimensions === undefined ? store.ui.imageHeight : dimensions.height;

//     useEffect(() => store.ui.setImageHeight(height));

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




    // const measure = (ele: HTMLElement): {width: number, height: number }  => {
    //     const { width, height } = ele ? ele.getBoundingClientRect() : { width: 0, height: 0 };
    //     console.log("Picture: measure: rect", width, height);
    //     return { width: width, height: height };
    // }

    // const ref = useRef(null);
    // const picture = ref.current;
    // console.log("picture=", picture);
    // const [dimensions, setDimensions] = useState({width: 0, height: 0});

    // const measureHandler = useCallback(
    //     event => {
    //         const ele = event.currentTarget;
    //         const measurements = measure(ele);
    //         console.log("measureHandler: measurements", measurements);
    //         setDimensions(measurements);
    //     },
    //     [ setDimensions ]
    // ); 

    // useEventListener('resize', measureHandler, picture);

    // const meas = measure(picture.current);

    // console.log("Picture: meas", meas);

    