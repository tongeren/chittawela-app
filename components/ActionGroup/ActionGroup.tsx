import { ActionGroupProps } from './types';

const ActionGroup:React.FunctionComponent<ActionGroupProps> = ({ action }):React.ReactElement => {
    return (
        <div className="action-group">
            <input 
                aria-label="email" 
                type="email"
                className="action-group__input input input--white-hair" 
                placeholder="Your E-mail address" 
                required
            />
            <button className="action-group__button button button--white-transparent button--interact-gold">{ action }</button>
        </div>
    );
};

export default ActionGroup;