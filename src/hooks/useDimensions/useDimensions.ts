import { useState, useCallback, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook, HTMLElements } from "./types";
import { THROTTLE_TIMES } from '../throttle';

// See https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
const getDimensions: (ele: HTMLElement) => DimensionObject = (ele: HTMLElement) => {
    const rect:DOMRect = ele.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        x: rect.x,
        y: rect.y,
        right: rect.right,
        bottom: rect.bottom
    };
};

export const useDimensions: (liveMeasure: UseDimensionsArgs) => UseDimensionsHook = (liveMeasure: UseDimensionsArgs) => {
    const [dimensions, setDimensions] = useState<DimensionObject>();
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
            const handleResize = throttle(measure, THROTTLE_TIMES.resize);

            // If we want to measure continually take care of adding and removing the appropriate event listeners
            if (liveMeasure) {
                window.addEventListener("resize", handleResize);
                return () => {
                    window.removeEventListener("resize", handleResize);
                };
            }
        } 
    }, [ele]);

    if (dimensions === null) {  console.log("WTF"); return [ref, undefined, ele]; }
    return [ref, dimensions, ele];
};

