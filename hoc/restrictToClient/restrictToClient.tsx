import ConditionallyRender from '../../containers/ConditionallyRender/ConditionallyRender';
import getDisplayName from '../../helpers/getDisplayName';

interface WrappedComponentProps {
    props: Record<string, unknown>
}

const restrictToClient = (WrappedComponent: React.FunctionComponent<WrappedComponentProps>):React.FunctionComponent => {
    const RestrictToClient = (props) => {

        return (
            <ConditionallyRender client>
                <WrappedComponent { ...props } />
            </ConditionallyRender>
        );
    };

    RestrictToClient.displayName = `restrictToClient(${getDisplayName(WrappedComponent)})`;

    return RestrictToClient;
};

restrictToClient.displayName = "restrictToClient";

export default restrictToClient;