import CenterBox from '../CenterBox/CenterBox';
import FormGroup from './FormGroup/FormGroup';
import { ActionFormProps } from './types';

const ActionForm:React.FunctionComponent<ActionFormProps> = ({ caption, list }):React.ReactElement => {
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