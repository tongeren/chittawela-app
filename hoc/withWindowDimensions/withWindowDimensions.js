// Observer HOC implemented via hook
import useWindowDimensions from '../hooks/useWindowDimensions';
import getDisplayName from '../helpers/getDisplayName';

const withWindowDimensions = WrappedComponent => {
    const WithWindowDimensions = props => {
        const { width, height } = useWindowDimensions();
        return (
                <WrappedComponent { ...props } windowWidth= { width } windowHeight={ height } />
        );
    };

    WithWindowDimensions.displayName = `withWindowDimensions(${getDisplayName(WrappedComponent)})`;
    
    return WithWindowDimensions;
};

export default withWindowDimensions;