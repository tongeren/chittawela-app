import React from 'react';
import getDisplayName from '../../helpers/getDisplayName';

/* eslint-disable-next-line */
type IProps = Pick<any, string | number | symbol>
type IRefExotic = React.ForwardRefExoticComponent<IProps & React.RefAttributes<unknown>>

const renderRefHOC = <P extends IProps>(Component: React.ComponentType<P>): IRefExotic => {
    class RenderRef extends React.Component<P> { 
        render() {
            const { forwardedRef, ...rest } = this.props;

            return <Component ref={ forwardedRef } { ...rest as P } />
        }
    }
    
    const forwardRef = (props, ref) => {
        return <RenderRef { ...props } forwardedRef={ ref } />
    };


    const name = getDisplayName(Component);
    forwardRef.displayName = `renderRefHOC(${ name })`;

    return React.forwardRef(forwardRef);
};

export default renderRefHOC;

