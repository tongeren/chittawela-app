import PropTypes from 'prop-types';

const Avatar = ({ src, alt, margin }) => {
    const classes = "avatar".concat(" ", margin ? `u-margin-bottom-${ margin }`: "");

    return (
        <div className={ classes }>
            <div className="avatar__photo">
                <img className="avatar__img" src={ src } alt={ alt } />
            </div>
        </div>
    );
};

export default Avatar;

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    margin: PropTypes.string
};