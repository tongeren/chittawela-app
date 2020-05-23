import PropTypes from 'prop-types';

const AlignTopBottom = ({ first, last }) => {
    return (
        <div className="align-top-bottom-layout">                 
            <div className="align-top-bottom-layout__first">{ first }</div> 
            <div className="align-top-bottom-layout__last">{ last }</div> 
        </div>
    );
};

export default AlignTopBottom;

AlignTopBottom.propTypes = {
    first: PropTypes.element.isRequired,
    last: PropTypes.element.isRequired
};

