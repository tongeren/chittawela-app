import { PhotoProps } from './types';

const Photo:React.FunctionComponent<PhotoProps> = ({ id, media, srcSet, sizes, src, alt, name, styles }):React.ReactElement => {
    return (
        <div className="photo">
            <picture id={ id } className={ `photo__img img--size-${ name }` } style={ styles }>
                <source media={ media } srcSet={ srcSet } sizes={ sizes } />
                <img src={ src } alt={ alt } />
            </picture>
        </div>
    );
};

Photo.displayName = "Photo";

export default Photo;
