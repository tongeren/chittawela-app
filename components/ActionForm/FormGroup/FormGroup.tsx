import { FormGroupProps } from './types';

const FormGroup:React.FunctionComponent<FormGroupProps> = ({id, name, inputType, hint, placeholder}):React.ReactElement => {
    return (
        <div className="form__group labeled-input">
            <input 
                aria-label={ name } 
                type={ inputType }
                className="labeled-input__input input input--transparent-white" 
                placeholder={ placeholder} 
                id={ id } 
                required
            />
            <label htmlFor={ id } className="labeled-input__label">{ hint }</label>
        </div>
    );
};

export default FormGroup;

