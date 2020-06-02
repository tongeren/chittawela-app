import { useState, useCallback, useEffect, useRef } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
import _ from 'lodash';
import { MeasurementObject, UseDimensionsArgs, UseDimensionsHook, HTMLElements } from "./types";
import { THROTTLE_TIMES } from '../throttle';

// See https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
const getDimensions: (ele: HTMLElement) => MeasurementObject = (ele: HTMLElement) => {
    const rect:DOMRect = ele.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
};

export const useMeasurements = () => {
    const [dimensions, setDimensions] = useState<MeasurementObject>();
    const [ele, setEle] = useState<HTMLElement>();

    const ref = useCallback<(ele: HTMLElement) => void>(ele => setEle(ele), []);
    // const ref = useRef<HTMLElements>()
    // const ele = ref.current;
    
    useEffect(() => {
        // If element exists, then
        if (ele) {

            // Define the measure function
            const measure = () => {
                // Allow for animations to run first and then set the dimensions
                return window.requestAnimationFrame(
                    () => setDimensions(getDimensions(ele))
                );
            };

            // Measure the element
            measure();

            // Define event handlers, use throttling to reduce performance impact
            const handleResize = _.throttle(measure, THROTTLE_TIMES.resize);
            const handleScroll = _.throttle(measure, THROTTLE_TIMES.scroll);

            // If we want to measure continually take care of adding and removing the appropriate event listeners
          
            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
            };
            
        } 
    }, [ele]);

    if (dimensions === null) {  console.log("WTF"); return [ref, undefined, ele]; }
    return [ref, dimensions, ele];
};

