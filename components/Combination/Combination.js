import PropTypes from 'prop-types';
import SVGIcon from '../SVG/SVG';

const Combination = ({ sprite, text }) => {
    return (
        <div className="combination">
            <div className="combination__disc">
                <SVGIcon sprite={ sprite } classes="combination__icon" />
            </div>
            <div className="combination__text u-text-center">
                <span>{ text }</span>
            </div>
        </div>
    );
};

export default Combination;

Combination.propTypes = {
    sprite: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
