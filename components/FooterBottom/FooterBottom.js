import PropTypes from 'prop-types';

const FooterBottom = ({ logoBox, navLeft, navRight, socialMedia, subscribeForm, copyright }) => 
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

export default FooterBottom;

FooterBottom.propTypes = {
    logoBox: PropTypes.element.isRequired,
    navLeft: PropTypes.element.isRequired,
    navRight: PropTypes.element.isRequired,
    socialMedia: PropTypes.element.isRequired,
    subscribeForm: PropTypes.element.isRequired,
    copyright: PropTypes.element.isRequired
};



