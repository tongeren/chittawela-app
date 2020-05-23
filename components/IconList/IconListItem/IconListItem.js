import PropTypes from 'prop-types';

const IconListItem = ({ title, description }) => {
    return (
        <li className="icon-list__item">
            <div className="icon-list__container">
                <h2 className="icon-list__header heading-seconday-alt">{ title }</h2>
                <p>{ description }</p>
            </div>
        </li>
    );
};

export default IconListItem;

IconListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};