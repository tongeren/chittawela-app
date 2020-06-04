import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import isPortrait from '../../hooks/isPortrait';
import calcClipHeight from '../../helpers/calcClipHeight';
import { useStore } from '../StoreProvider/StoreProvider';
import { PhotoSectionProps } from './types';

const PhotoSection:React.FunctionComponent<PhotoSectionProps> = ({ id, children }):React.ReactElement => {
    const store = useStore();

    const [ ref, dimensions ] = useDimensions({liveMeasure: true});

    const { width, height } = !(dimensions === undefined) ? dimensions : { width: 0, height: 0 };
    
    console.log("PhotoSection: width, height", width, height);
    // const styles = null ;//getStyle(width, height);
    const clip = store.client.clipHeight();
    const total = height + 2 * clip;
    
    const H = (height + clip) + "px";
    const C = clip + "px";
    const M = -0.5* clip + "px";
    const N = -clip + "px";
    const T = total + "px";

    const styles = {
        marginTop: M,
        paddingTop: C,
        height: T,
        clipPath: (store.client.responsive === "portrait") ? "none" : `polygon(0 ${ T }, 100vw ${ H }, 100vw 0, 0 ${ C })`
    };
    console.log("PhotoSection: styles", styles);

    return (        
        <section ref={ ref } id={ id } className="photo-section" style={ (height===0) ? undefined : styles }>
            { children }
        </section>
    );
};

export default PhotoSection;

