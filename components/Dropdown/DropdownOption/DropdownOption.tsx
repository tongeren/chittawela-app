import { DropdownOptionProps } from './types';

const DropdownOption:React.FunctionComponent<DropdownOptionProps> = ({ label, number, onChange, name}):React.ReactElement => {
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

DropdownOption.displayName = "DropdownOption";

export default DropdownOption;

