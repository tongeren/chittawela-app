import React from 'react';
// hoc
import restrictToClient from '../../hoc/restrictToClient';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import isPortrait from '../../hooks/isPortrait';
import calcClipHeight from '../../helpers/calcClipHeight';
import { useStore } from '../StoreProvider/StoreProvider';

const PhotoSection = ({ id, children }) => {
    const [ ref, dimensions ] = useDimensions({liveMeasure: true});

    const width = (dimensions === undefined) ? 0 : dimensions.width; 
    const height = (dimensions === undefined ) ? 0 : dimensions.height;
    
    // console.log("PhotoSection: width, height", width, height);
    // const styles = null ;//getStyle(width, height);
    const clip = calcClipHeight(width);
    const total = height + 2 * clip;
    const H = (height + clip) + "px";
    const C = clip.toFixed() + "px";
    const M = (-0.5* clip).toFixed() + "px";
    const N = (-clip).toFixed() + "px";
    const T = total.toFixed() + "px";

    // console.log("PhotoSection: H, C, T", H, C, T);
    // console.log("clip", clip);
    const styles = {
        marginTop: M,
        paddingTop: C,
        height: T,
        clipPath: isPortrait() ? "none" : `polygon(0 ${ T }, 100vw ${ H }, 100vw 0, 0 ${ C })`
    };
    console.log("PhotoSection: styles", styles);
    
    return (        
        <section ref={ ref } id={ id } className="photo-section" style={ styles }>
            { children }
        </section>
    );
};

export default restrictToClient(PhotoSection);

