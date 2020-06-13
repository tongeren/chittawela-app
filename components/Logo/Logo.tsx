import { LogoProps } from './types';

const Logo:React.FunctionComponent<LogoProps> = ({ flex }) => {
    return (
        <img id="logo" className={ `logo logo--${ flex }` } src="/logo_192px_color.png" alt="Logo"></img>
    );
};

Logo.displayName = "Logo";

export default Logo;