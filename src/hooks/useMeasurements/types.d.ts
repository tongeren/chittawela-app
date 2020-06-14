export interface MeasurementObject {
    width: number
    height: number
}

export type HTMLElements = HTMLElement | HTMLDivElement | HTMLPictureElement;

export type UseDimensionsHook = [
    // MutableRefObject<HTMLElements>,
    // DimensionObject | undefined,
    // HTMLElements | undefined
    (ele: HTMLElement) => void,
    DimensionObject,
    HTMLElement
];

export interface UseDimensionsArgs {
    liveMeasure?: boolean;
}

// (ele: HTMLElements) => void