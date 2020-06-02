export interface DimensionObject {
    width: number
    height: number
    top: number
    left: number
    x: number
    y: number
    right: number
    bottom: number
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