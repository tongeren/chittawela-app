// export interface SliderValueObject {
//     sliderValue: string
// }

export type UseSliderHook = [
    (ele: HTMLInputElement) => void,
    string | undefined,
    HTMLInputElement | undefined
];