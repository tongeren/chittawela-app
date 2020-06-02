export interface SliderValueObject {
    sliderValue: string
}

export type UseSliderHook = [
    (ele: HTMLInputElement) => void,
    SliderValueObject | undefined,
    HTMLInputElement | undefined
];