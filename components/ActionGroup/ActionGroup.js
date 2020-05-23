import PropTypes from 'prop-types';

const ActionGroup = ({ action }) => {
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

ActionGroup.propTypes = {
    action: PropTypes.string.isRequired
};