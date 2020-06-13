import { Fragment } from 'react';
import Dropdown from '../../../Dropdown/Dropdown';
import TextTransform from '../../../TextTransform/TextTransform';
import RiskFreeSeal from '../../../RiskFreeSeal/RiskFreeSeal';
import { TableCellProps } from './types';

const TableCell:React.FunctionComponent<TableCellProps> = ({ insert, transform, dropdown, content }):React.ReactElement => {
    const colJsx =  <td className="pricing-table__risk-free" rowSpan={ 5 }><RiskFreeSeal /></td>;
    const cellJsx = <td>
                        { (dropdown) 
                            ?  <Dropdown { ...dropdown } /> 
                            : ((content) && <TextTransform transform={ (transform) ? transform : "none" }>{ content }</TextTransform>) 
                        }
                    </td>;

    return ( 
        <Fragment>{ insert ? colJsx : cellJsx }</Fragment> 
    );    
};

TableCell.displayName = "TableCell";

export default TableCell;

