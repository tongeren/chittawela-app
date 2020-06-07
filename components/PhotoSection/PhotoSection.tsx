import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import { useStore } from '../StoreProvider/StoreProvider';
import { PhotoSectionProps } from './types';

const PhotoSection:React.FunctionComponent<PhotoSectionProps> = ({ id, children }):React.ReactElement => {
    const store = useStore();

    const [ ref, dimensions ] = useDimensions({ liveMeasure: true });
    const { width, height } = !(dimensions === undefined) ? dimensions : { width: 0, height: 0 };
    store.ui.setBookSectionHeight(height);
    
    return useObserver( () => (        
        <section ref={ ref } id={ id } className="photo-section" style={ store.getPhotoSectionStyles() }>
            { children }
        </section>
    ));
};

export default PhotoSection;

// (height===0) ? undefined : styles