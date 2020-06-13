import SVG from '../SVG/SVG';
import CenterBox from '../CenterBox/CenterBox';
import LinkButton from '../LinkButton/LinkButton';
import { ApplicationProps } from './types';

const Application:React.FunctionComponent<ApplicationProps> = ({ sprite, header, cta, buttonText, href}):React.ReactElement => {
    return (
        <div className="application">
            <div className="application__disc">
                <SVG classes="application__icon" sprite={ sprite } />
            </div>
            <div className="application__text">
                <h3 className="application__header heading-tertiary">
                    <span className="limited">{ header }</span>
                </h3>
                <div className="application__cta">{ cta }</div>
                <div className="application__btn">
                    <CenterBox>
                        <LinkButton href={ href } text={ buttonText } />
                    </CenterBox>
                </div>
            </div>
        </div>
    );   
};

Application.displayName = "Application";

export default Application;

