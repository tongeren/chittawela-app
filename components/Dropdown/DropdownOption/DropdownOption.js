import PropTypes from 'prop-types';

const DropdownOption = ({ onChange, label, name, number}) => {
    const local = `${name}-${number}`;

    return (
        <div className="dropdown__option">
            <input 
                className="dropdown__input"  
                id={ local }
                type="radio"  
                name={ name }
                defaultChecked={ (number === 0) }
                onClick={ () => onChange(number) } 
            />
            <label className="dropdown__label dropdown-label" htmlFor={ local }>&nbsp;{ label }</label>
        </div>
    );
};

export default DropdownOption;

DropdownOption.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};