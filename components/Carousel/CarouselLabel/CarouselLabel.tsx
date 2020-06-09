import { CarouselLabelProps } from './types';

const CarouselLabel:React.FunctionComponent<CarouselLabelProps> = ({ name, group, number, children }):React.ReactElement => {
    return (
        <label 
            className={ `carousel__${ group }-btn` } 
            htmlFor={ `slide-${ name }-${ number }` }
        >
            { children }
        </label>
    );
};

export default CarouselLabel;

