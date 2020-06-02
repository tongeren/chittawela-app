/* eslint react/prop-types: 0 */
import React from 'react';
import { useSliderValue } from '../../hooks/useSliderValue/useSliderValue';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import restrictToClient from '../../hoc/restrictToClient';
import Photo from '../Photo/Photo';
import { TransformationProps } from './types';

const Transformation: React.FunctionComponent<TransformationProps> = ({ before, after }): React.ReactElement => {
    const [sliderRef, sliderValue] = useSliderValue();
    const [beforeRef, dimensions ] = useDimensions({ liveMeasure: true });

    const width = dimensions?.width;

    const styles = {
        "handle":  { "left":  sliderValue + "%" },
        "divisor": { "width": sliderValue + "%" },
        "after":   { "width": width + "px"      }         // scale picture
    };

    return ( 
        <div className="transformation">
            <div className="transformation__comparison">
                <figure className="transformation__figure">
                    <div ref={ beforeRef } className="transformation__image--before">
                        <Photo { ...before } />
                    </div>
                    <div className="transformation__handle" style={ styles.handle } />
                    <div className="transformation__divisor" style={ styles.divisor } >
                        <div className="transformation__image--after photo"> 
                            <Photo { ...after } styles={ styles.after } />
                        </div>
                    </div>
                </figure>
                <input ref={ sliderRef } className="transformation__slider" type="range" min="0" max="100" />
            </div>
        </div>
    );
};

export default restrictToClient(Transformation);
