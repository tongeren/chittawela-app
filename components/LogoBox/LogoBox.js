import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import BrandName from '../BrandName/BrandName';

const LogoBox = ({ flex, name }) => 
    <div className={ `logo-box logo-box--${ flex }` }>
        <Logo flex={ flex }/>
        <BrandName name={ name } flex={ flex }/>
    </div>;

export default LogoBox;

LogoBox.propTypes = {
    flex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};