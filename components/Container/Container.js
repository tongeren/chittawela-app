import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="container">{ children }</div>; 

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired
};


