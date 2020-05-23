import PropTypes from 'prop-types';
import SVGIcon from '../SVG/SVG';

const Copyright = ({ name, period }) => 
    <footer className="copyright">
        <div className="copyright__copyright">
            <span>Copyright</span>
            <SVGIcon sprite="copyright" classes="copyright__icon"/>
            <span>{ period + " " + name }.</span>
        </div>
        <div className="copyright__rights">&nbsp;All rights reserved.</div>
    </footer>;

export default Copyright;

Copyright.propTypes = {
    name: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired
}