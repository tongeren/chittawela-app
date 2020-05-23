import PropTypes from 'prop-types';
import TableCell from './TableCell/TableCell';

const TableRow = ({ cells }) => {
    return (
        <tr>{ cells.map((cell, key) => <TableCell key={ key } { ...cell } /> ) }</tr>
    );
};

export default TableRow;

TableRow.propTypes = {
    cells: PropTypes.arrayOf(
        PropTypes.shape({
            transform: PropTypes.string,
            dropdown: PropTypes.shape({
                onChange: PropTypes.func,
                list: PropTypes.arrayOf(
                    PropTypes.shape({
                        label: PropTypes.string,
                        value: PropTypes.number
                    })
                ),
                name: PropTypes.string.isRequired
            }), 
            content: PropTypes.node,
            insert: PropTypes.bool
        }).isRequired
    ).isRequired
};
