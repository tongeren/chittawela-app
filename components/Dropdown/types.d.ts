import { LabelNumberProps } from './DropdownOption/types';

export interface DropdownProps {
    onChange: (number: number) => void
    name: string
    list: LabelNumberProps[]
}