import PropTypes from 'prop-types';

const SectionHeading = ({ alt, title, subtitle, color, align, margin }) => {
    const classes={
        "container" : (color ? `u-text-${color}` : "")
            .concat(" ", align ? `u-text-${align}` : "")
            .concat(" ", margin ? `u-margin-bottom-${margin}` : ""),
        "heading" : "heading-secondary"
            .concat("", alt ? `-alt` : "" )
            .concat(" ", subtitle ? "u-margin-bottom-tiny": "")
    };

    return (
        <div className={ classes.container }>
            <h2 className={ classes.heading } >
                { title }
            </h2>
            { subtitle ? <em>{ subtitle }</em> : null }
        </div>
    );
};

export default SectionHeading;

SectionHeading.propTypes = {
    alt: PropTypes.bool,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
    margin: PropTypes.string
};