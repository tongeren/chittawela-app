import React, { useRef, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import RefPicture from './RefPicture/RefPicture';
import { IPicture } from './RefPicture/Picture/Picture';

/* eslint-disable-next-line */
export interface IPictureWithHeight extends IPicture { }

const PictureWithHeight: React.FunctionComponent<IPictureWithHeight> = ({ classes, sources, image }):React.ReactElement => {    
    const store = useStore(); 
    const observed = useRef(null);

    useEffect(() => {
        const picture = observed.current;
        const height = picture.getBoundingClientRect().height;
        store.ui.setImageHeight(height);
    }, [observed, store.ui]);

    return useObserver( () => (
        <RefPicture ref={ observed } classes={ classes } sources={ sources } image={ image } />
    ));
};

PictureWithHeight.displayName = "PictureWithHeight";

export default PictureWithHeight;

