// Observer HOC implemented via hook
import useScrollPositions from '../hooks/useScrollPositions';
import getDisplayName from '../helpers/getDisplayName';

const withScrollPositions = WrappedComponent => {
    const WithScrollPositions = props => {
        const { scrollX, scrollY } = useScrollPositions();

        return (
                <WrappedComponent { ...props } scrollX= { scrollX } scrollY={ scrollY } />
        );
    };

    WithScrollPositions.displayName = `withScrollPositions(${getDisplayName(WrappedComponent)})`;
    return WithScrollPositions;
};

export default withScrollPositions;