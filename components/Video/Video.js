import PropTypes from 'prop-types';

const Video= ({ src, alt }) => {
    return (
        <div className="video u-margin-bottom-medium">
            <div className="video__vimeo">
                <iframe 
                    id="vimeo"                    // for use to find the Vimeo player object
                    className="video__iframe" 
                    src={ src } 
                    allow="fullscreen"
                    alt={ alt } 
                />
            </div>
        </div>
    );
};

export default Video;

Video.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};