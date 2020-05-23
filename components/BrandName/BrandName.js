import PropTypes from 'prop-types';

const BrandName = ({ flex, name }) => 
    <span className={ `brand-name brand-name--${ flex }` }>{ name }</span>;

export default BrandName;

BrandName.propTypes = {
    flex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
