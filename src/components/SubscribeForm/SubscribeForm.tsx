import ActionGroup from '../ActionGroup/ActionGroup';

const SubscribeForm = ():React.ReactElement => {
    return (
        <form className="subscribe-form">
            <div className="subscribe-form__title newsletter">Monthly newsletter</div>
            <ActionGroup action="Subscribe" />
        </form>
    );
};

SubscribeForm.displayName = "SubscribeForm";

export default SubscribeForm;

{/* <label htmlFor="email" className="label">Your E-mail address where we can reach you on</label> */}
                