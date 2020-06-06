import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { THROTTLE_TIMES } from '../throttle';
import { UseSliderHook } from './types';

const getSliderValue: (slider: HTMLInputElement) => string = (slider: HTMLInputElement) => {
    return slider.value;
};

export const useSliderValue = ():UseSliderHook => {
    const [sliderValue, setSliderValue] = useState<string>();
    const [slider, setSlider] = useState<HTMLInputElement>();

    const ref = useCallback(slider => setSlider(slider), []);
    
    useEffect(() => {
        // If element exists, then
        if (slider) {

            const determineSliderValue = () => {
                // Allow for animations to run first and then set the dimensions
                return window.requestAnimationFrame(
                    () => setSliderValue(getSliderValue(slider))
                );
            };

            determineSliderValue();

             // Define event handler, use throttling to reduce performance impact
            const handleInputChange = _.throttle(determineSliderValue, THROTTLE_TIMES.input);

            slider.addEventListener('input', handleInputChange);
            return () => slider.removeEventListener('input', handleInputChange);
        }
    }, [slider]);

    return [ref, sliderValue, slider];
};

