import PropTypes from 'prop-types';
import TableCell from './TableCell/TableCell';
import { TableRowProps } from './types';

const TableRow: React.FunctionComponent<TableRowProps> = ({ cells }):React.ReactElement => {
    return (
        <tr>{ cells.map((cell, key) => <TableCell key={ key } { ...cell } /> ) }</tr>
    );
};

TableRow.displayName = "TableRow";

export default TableRow;