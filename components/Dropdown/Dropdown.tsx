import DropdownOption from './DropdownOption/DropdownOption';
import { DropdownProps } from './types';

const Dropdown:React.FunctionComponent<DropdownProps> = ({ onChange, list, name }):React.ReactElement => {
    return (
        <div className="dropdown">
            <div className="dropdown__options">
                { list.map((item, key) => 
                    <DropdownOption onChange={ onChange } { ...item } name={ name } number={ key } key={ key } />) 
                }
            </div>
        </div>
    );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;