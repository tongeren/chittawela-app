import PropTypes from 'prop-types';
import DropdownOption from './DropdownOption/DropdownOption';

const Dropdown = ({ onChange, list, name }) => {
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

export default Dropdown;

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,   
            value: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    name: PropTypes.string.isRequired
};