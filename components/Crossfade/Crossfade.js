import PropTypes from 'prop-types';

const Crossfade = ({ pictures }) => {
    return (
        <div className="crossfade">
            { pictures.map((picture, key) => {
                <div className="crossfade__img">
                    <Picture key={ key } { ...picture } />
                </div>
            })}
        </div>
    );
};

export default Crossfade;

Crossfade.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    )
}
