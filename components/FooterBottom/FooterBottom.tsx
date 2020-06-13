import { FooterBottomProps } from './types';

const FooterBottom:React.FunctionComponent<FooterBottomProps> = ({ logoBox, navLeft, navRight, socialMedia, subscribeForm, copyright }):React.ReactElement => 
    <div className="footer-bottom-layout">
        <div className="footer-bottom-layout__line-left" />
        <div className="footer-bottom-layout__line-right" />
        <div className="footer-bottom-layout__logo-box">{ logoBox }</div>
        <div className="footer-bottom-layout__nav-left">{ navLeft }</div>
        <div className="footer-bottom-layout__nav-right">{ navRight }</div>
        <div className="footer-bottom-layout__social-media">{ socialMedia }</div>
        <div className="footer-bottom-layout__line-vertical"/>
        <div className="footer-bottom-layout__form">{ subscribeForm }</div>
        <div className="footer-bottom-layout__copyright">{ copyright }</div> 
    </div>;

FooterBottom.displayName = "FooterBottom";

export default FooterBottom;




