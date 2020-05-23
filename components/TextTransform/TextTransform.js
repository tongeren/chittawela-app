import PropTypes from 'prop-types';

const TextTransform = ({ transform, children }) => {
    return (
        <span className={ (transform === "none") ? "" : `text-${ transform }` }>{ children }</span>
    );
};

export default TextTransform;

TextTransform.propTypes = {
    transform: PropTypes.string, // none, emphasis, strong, discounted 
    children: PropTypes.node
};