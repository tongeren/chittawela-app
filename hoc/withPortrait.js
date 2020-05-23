// Observer HOC implemented via hook
import isPortrait from '../hooks/isPortrait';
import getDisplayName from '../helpers/getDisplayName';

const withPortrait = WrappedComponent => {
    const WithPortrait = props => {
        const portrait = isPortrait();
        return (
                <WrappedComponent { ...props } isPortrait= { portrait } />
        );
    };

    WithPortrait.displayName = `withPortrait(${getDisplayName(WrappedComponent)})`;
    return WithPortrait;
};

export default withPortrait;