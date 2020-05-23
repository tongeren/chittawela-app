import ConditionallyRender from '../containers/ConditionallyRender/ConditionallyRender'
import getDisplayName from '../helpers/getDisplayName';

const restrictToClient = WrappedComponent => {
    const RestrictToClient = props => {

        return (
            <ConditionallyRender client>
                <WrappedComponent { ...props }/>
            </ConditionallyRender>
        );
    };

    RestrictToClient.displayName = `restrictToClient(${getDisplayName(WrappedComponent)})`;

    return RestrictToClient;
};

export default restrictToClient;