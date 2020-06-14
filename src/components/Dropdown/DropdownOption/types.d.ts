export interface DropdownOptionProps extends LabelNumber {
    label: string
    number: value
    onChange: (number: number) => void
    name: string
}