import PropTypes from 'prop-types';

// hoc
import restrictToClient from '../../hoc/restrictToClient';

// hooks
import isPortrait from '../../hooks/isPortrait';

const SectionLayout = ({ id, heading, children, blue, marginBottom, marginTop }) => { 
    const portrait = isPortrait();
    const color = `section-layout ${blue ? "section-layout--blue" : ""}`;
    const classes = portrait ? color : (color 
        .concat(" ", marginBottom ? "u-margin-bottom-section" : "")
        .concat(" ", marginTop ? "u-margin-top-section" : "")
    );
        
    return (
        <div id={ id } className={ classes }>
            { heading }
            { children }
        </div>
    );
};

export default restrictToClient(SectionLayout);

SectionLayout.propTypes = {
    id: PropTypes.string,
    heading: PropTypes.element,
    children: PropTypes.node.isRequired
};