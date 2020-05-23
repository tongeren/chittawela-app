import PropTypes from 'prop-types';

const Statement =  ({ children }) => {
    return (
        <div className="statement">
            <div className="statement__container">
                { children }
            </div>
        </div>
    );
};


export default Statement;

Statement.propTypes = {
    children: PropTypes.node.isRequired
};