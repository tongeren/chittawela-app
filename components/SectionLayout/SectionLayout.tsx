import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useStore } from '../StoreProvider/StoreProvider';
import { SectionLayoutProps } from './types';

const SectionLayout: React.FunctionComponent<SectionLayoutProps> = ({ id, heading, children, blue, marginBottom, marginTop }):React.ReactElement => { 
    const store = useStore();

    const portrait = (store.client.responsive === "portrait");
    const color = `section-layout ${blue ? "section-layout--blue" : ""}`;
    const classes = portrait ? color : (color 
        .concat(" ", marginBottom ? "u-margin-bottom-section" : "")
        .concat(" ", marginTop ? "u-margin-top-section" : "")
    );

    
    // const observed = useRef();

    // useEffect(() => {
    //     const layout = observed.current;
    // },[observed])
        
    return (
        <div id={ id } className={ classes }>
            { heading }
            { children }
        </div>
    );
};

export default SectionLayout;

SectionLayout.propTypes = {
    id: PropTypes.string,
    heading: PropTypes.element,
    children: PropTypes.node.isRequired
};