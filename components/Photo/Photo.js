import PropTypes from 'prop-types';

// // hoc
// import restrictToClient from '../../hoc/restrictToClient';

const Photo = ({ id, media, srcSet, sizes, src, alt, sectionName }) => {
    return (
        <div className="photo">
            <picture id={ id ? id : null } className={ `photo__img img--size-${ sectionName }` }>
                <source media={ media } srcSet={ srcSet } sizes={ sizes } />
                <img src={ src } alt={ alt } />
            </picture>
        </div>
    );
};

export default Photo;

Photo.propTypes = {
    id: PropTypes.string,
    media: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    sectionName: PropTypes.string.isRequired
};

