import PropTypes from 'prop-types';
import useSliderValue from '../../hooks/useSliderValue/useSliderValue';
import useDimensions from '../../hooks/useDimensions/useDimensions';
import restrictToClient from '../../hoc/restrictToClient';
import Photo from '../Photo/Photo';

const Transformation = ({ before, after }) => {
    const [sliderRef, sliderValue] = useSliderValue();
    const [beforeRef, { width }] = useDimensions();

    const styles = {
        "handle":  { "left":  sliderValue + "%" },
        "divisor": { "width": sliderValue + "%" },
        "after":   { "width": width + "px"      }         // scale picture
    };

    return (
        <div className="transformation">
            <div className="transformation__comparison">
                <figure className="transformation__figure">
                    <div ref={ beforeRef } className="transformation__image--before">
                        <Photo { ...before } />
                    </div>
                    <div className="transformation__handle" style={ styles.handle } />
                    <div className="transformation__divisor" style={ styles.divisor } >
                        <div className="transformation__image--after photo" style={ styles.after }>
                            <Photo { ...after } />
                        </div>
                    </div>
                </figure>
                <input ref={ sliderRef } className="transformation__slider" type="range" min="0" max="100" />
            </div>
        </div>
    );
};

export default restrictToClient(Transformation);

Transformation.propTypes = {
    before: PropTypes.shape({
        media: PropTypes.string,
        srcSet: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        sectionName: PropTypes.string.isRequired   
    }).isRequired,
    after: PropTypes.shape({
        media: PropTypes.string,
        srcSet: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        sectionName: PropTypes.string.isRequired    
    }).isRequired
};

