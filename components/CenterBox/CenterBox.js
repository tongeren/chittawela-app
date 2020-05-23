import PropTypes from 'prop-types';

const CenterBox = ({ children }) => {
    return (
        <div className="center-box">
            { children }
        </div>
    );
};

export default CenterBox;

CenterBox.propTypes = {
    children: PropTypes.element.isRequired
};