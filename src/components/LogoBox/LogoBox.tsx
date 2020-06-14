import Logo from '../Logo/Logo';
import BrandName from '../BrandName/BrandName';
import { LogoBoxProps } from './types';

const LogoBox:React.FunctionComponent<LogoBoxProps> = ({ flex, name }):React.ReactElement => {
    return (
        <div className={ `logo-box logo-box--${ flex }` }>
            <Logo flex={ flex }/>
            <BrandName name={ name } flex={ flex }/>
        </div>
    );
};

LogoBox.displayName = "LogoBox";

export default LogoBox;
