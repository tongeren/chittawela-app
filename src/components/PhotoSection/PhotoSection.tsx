import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import { useStore } from '../StoreProvider/StoreProvider';
import { PhotoSectionProps } from './types';

// Note that as soon as we want more than one PhotoSection we have to rewrite this component and the store
const PhotoSection:React.FunctionComponent<PhotoSectionProps> = ({ id, children }):React.ReactElement => {
    const store = useStore();

    // Measure dimensions of this section
    const [ ref, dimensions ] = useDimensions({ liveMeasure: true });
    const { width, height } = !(dimensions === undefined) ? dimensions : { width: 0, height: 0 };
    store.ui.setBookSectionHeight(height);
    
    return useObserver( () => (        
        <section ref={ ref } id={ id } className="photo-section" style={ store.getPhotoSectionStyles() }>
            { children }
        </section>
    ));
};

PhotoSection.displayName = "PhotoSection";

export default PhotoSection;