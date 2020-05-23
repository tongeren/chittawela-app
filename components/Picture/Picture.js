import PropTypes from 'prop-types';

const Picture = ({ sources, image }) => {
    return (
        <picture className="">
            { sources.map((source, key) => 
                <source key={ key } { ...source } />
            )}
            <img { ...image } />
        </picture>
    );
};

export default Picture;

Picture.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.string.isRequired,
            srcset: PropTypes.string.isRequired,
            sizes: PropTypes.string,
            comment: PropTypes.string.isRequired    
        })
    ),
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired  
    })
};
