import PropTypes from 'prop-types';

const FormGroup = ({id, name, inputType, hint, placeholder}) => {
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

FormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

