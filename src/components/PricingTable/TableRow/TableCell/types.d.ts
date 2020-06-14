import { DropdownProps } from '../../../Dropdown/types';

export interface TableCellProps {
    insert?: PropTypes.bool
    transform?: PropTypes.string,
    dropdown?: DropdownProps
    content?: React.ReactNode
}