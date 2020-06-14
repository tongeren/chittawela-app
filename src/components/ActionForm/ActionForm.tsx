import CenterBox from '../CenterBox/CenterBox';
import FormGroup from './FormGroup/FormGroup';
import LinkAnchor from '../LinkAnchor/LinkAnchor';
import { ActionFormProps } from './types';

const ActionForm:React.FunctionComponent<ActionFormProps> = ({ caption, list }):React.ReactElement => {
    return (
        <div className="action-form">
            <div className="action-form__caption">{ caption }</div>
            <div className="action-form__list">
                { list.map((item, key) => <FormGroup key={ key } { ...item } /> )}
            </div>
            <CenterBox>
                {/* <LinkAnchor /> */}
                <a href="#" className="button button--white-orange">Start your journey here</a>
            </CenterBox>
        </div>
    );
};

ActionForm.displayName = "ActionForm";

export default ActionForm;