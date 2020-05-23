import PropTypes from 'prop-types';

const Logo = ({ flex }) => <img id="logo" className={ `logo logo--${ flex }` } src="/logo_192px_color.png" alt="Logo"></img>;

export default Logo;

Logo.propTypes = {
    flex: PropTypes.string.isRequired
};