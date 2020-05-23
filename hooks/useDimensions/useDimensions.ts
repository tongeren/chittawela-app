import { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from "./types";

const THROTTLE_TIMES = {
    "scroll": 50,
    "resize": 1000
}; // ms

const getDimensions: (ele: HTMLElement) => DimensionObject = (ele: HTMLElement) => {
    const rect = ele.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
        // top: "x" in rect ? rect.x : rect.top,
        // left: "y" in rect ? rect.y : rect.left,
        // x: "x" in rect ? rect.x : rect.left,
        // y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom
    };
};

const useDimensions = (liveMeasure = true) => {
    const [dimensions, setDimensions] = useState({});
    const [ele, setEle] = useState(null);

    const ref = useCallback(ele => setEle(ele), []);

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
            if (liveMeasure) {
                window.addEventListener("resize", handleResize);
                window.addEventListener("scroll", handleScroll);

                return () => {
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("scroll", handleScroll);
                };
            };


        };
    }, [ele]);

    return [ref, dimensions, ele];
};

export default useDimensions;