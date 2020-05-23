import PropTypes from 'prop-types';

const BoxLayout = ({ firstText, text, other }) => {
    const textJSX = <div className="box-layout__text">{ text }</div>;
    const otherJSX = <div className="box-layout__other">{ other }</div>;

    return (
        <div className="box-layout">
            { firstText ? textJSX : otherJSX }
            { firstText ? otherJSX : textJSX }
        </div>
    );
};

export default BoxLayout;

BoxLayout.propTypes = {
    firstText: PropTypes.bool,
    text: PropTypes.node.isRequired,
    other: PropTypes.node.isRequired  
};