import React from 'react';
import { CarouselInputProps } from './types';

const CarouselInput:React.FunctionComponent<CarouselInputProps> = ({ name, number }):React.ReactElement => {
    return (
        <input 
            type="radio" 
            className="carousel__radio" 
            name="radio" 
            id={ `slide-${ name }-${ number }` } 
            defaultChecked={ (number === 1) ? true : false } 
        />
    );
};

export default CarouselInput;
