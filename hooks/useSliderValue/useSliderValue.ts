import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

const THROTTLE_TIME = 0; // ms

const getSliderValue: (slider: HTMLInputElement) => string = (slider: HTMLInputElement) => {
    return slider.value;
};

const useSliderValue = () => {
    const [sliderValue, setSliderValue] = useState(null);
    const [slider, setSlider] = useState(null);

    const ref = useCallback(slider => setSlider(slider), []);

    useEffect(() => {
        // If element exists, then
        if (slider) {

            const determineSliderValue = () => {
                return setSliderValue(getSliderValue(slider));
            };

            determineSliderValue();

             // Define event handler, use throttling to reduce performance impact
            const handleInputChange = _.throttle(determineSliderValue, THROTTLE_TIME);

            slider.addEventListener('input', handleInputChange);
            return () => slider.removeEventListener('input', handleInputChange);
        }
    }, [slider]);

    return [ref, sliderValue, slider];
};

export default useSliderValue;