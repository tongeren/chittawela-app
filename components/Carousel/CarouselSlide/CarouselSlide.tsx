import Photo from '../../Photo/Photo';
import { CarouselSlideProps } from './types';

const CarouselSlide:React.FunctionComponent<CarouselSlideProps> = ({ photo }):React.ReactElement => {
    return (
        <div className="carousel__slide">
            <div className="carousel__photo">
                <Photo { ...photo } />            
            </div>
        </div>
    );
};

export default CarouselSlide;
