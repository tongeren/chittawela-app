import PropTypes from 'prop-types';
import CenterBox from '../CenterBox/CenterBox';
import FormGroup from './FormGroup/FormGroup';

const ActionForm = ({ caption, list }) => {
    return (
        <div className="action-form">
            <div className="action-form__caption">{ caption }</div>
            <div className="action-form__list">
                { list.map((item, key) => <FormGroup key={ key } { ...item } /> )}
            </div>
            <CenterBox>
                <a href="#" className="button button--white-orange">Start your journey here</a>
            </CenterBox>
        </div>
    );
};

export default ActionForm;

ActionForm.propTypes = {
    caption: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            inputType: PropTypes.string.isRequired,
            hint: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};