import PropTypes from 'prop-types';
import IconListItem from './IconListItem/IconListItem';

const IconList = ({ items }) => {
    return (
        <ul className="icon-list">
            { items.map((item, key) => <IconListItem key={ key } { ...item } />) }
        </ul>
    );
};

export default IconList;

IconList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};