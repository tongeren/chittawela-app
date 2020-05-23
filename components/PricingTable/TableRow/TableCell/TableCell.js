import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../../Dropdown/Dropdown';
import TextTransform from '../../../TextTransform/TextTransform';
import RiskFreeSeal from '../../../RiskFreeSeal/RiskFreeSeal';

const TableCell = ({ insert, transform, dropdown, content }) => {
    const colJsx =  <td className="pricing-table__risk-free" rowSpan="5"><RiskFreeSeal /></td>;
    const cellJsx = <td>
                        { (dropdown) 
                            ?  <Dropdown { ...dropdown } /> 
                            : ((content) 
                                ? <TextTransform transform={ (transform) ? transform : "none" }>{ content }</TextTransform> 
                                : null
                            )
                        }
                    </td>;

    return ( 
        <Fragment>{ insert ? colJsx : cellJsx }</Fragment> 
    );    
};

export default TableCell;

TableCell.propTypes = {
    transform: PropTypes.string,
    dropdown: PropTypes.shape({
        onChange: PropTypes.func,
        list: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                value: PropTypes.number
            })
        ),
        name: PropTypes.string
    }),
    content: PropTypes.node,
    insert: PropTypes.bool
};