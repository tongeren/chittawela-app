import PropTypes from 'prop-types';

const Anchor = ({ href, name }) => <a href={ href } className="anchor">{ name }</a>;

export default Anchor;

Anchor.propTypes = {
    href: PropTypes.string,
    name: PropTypes.string.isRequired
}