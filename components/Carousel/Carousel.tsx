import CarouselInput from './CarouselInput/CarouselInput';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import CarouselLabel from './CarouselLabel/CarouselLabel';
import Photo from '../Photo/Photo';
import { CarouselProps } from './types';

const Carousel:React.FunctionComponent<CarouselProps> = ({ slides }):React.ReactElement => {
    // Determine the length of the photos array
    const no = slides.length;

    let slide;
    let inputs = [];
    let photos = [];
    let thumbnails = [];
    let quick = [];
    let prev = [];
    let next = [];

    for (let i = 1; i <= no; i++) {
        // Get the current slide
        slide = slides[ i - 1 ];

        // Populate the inputs 
        inputs.push(
            <CarouselInput key={ i } number={ i }/>
        );

        // Populate the photo slides 
        photos.push(
            <CarouselSlide photo={ slide.photo } key={ i }/>
        );

        // Populate the photo buttons  
        thumbnails.push(
            <CarouselLabel group="photo" key={ i } number={ i }>
                <Photo { ...slide.thumbnail } />
            </CarouselLabel>
        );
        
        // Poputate the quick buttons 
        quick.push(
            <CarouselLabel group="quick" key={ i } number={ i }/>
        );

        // Populate the prev buttons
        prev.push(
            <CarouselLabel group="prev" key={ i } number={ i }/>
        );

        // Populate the next buttons
        next.push(
            <CarouselLabel group="next" key={ i } number={ i }/>
        );

    }

    return (
        <div className="carousel">
            <div className="carousel__navigation">
                { inputs }
                <div className="carousel__slides">   { photos }    </div>
                <div className="carousel__photo-nav">{ thumbnails }</div>
                <div className="carousel__quick-nav">{ quick }     </div>
                <div className="carousel__prev-nav"> { prev }      </div>
                <div className="carousel__next-nav"> { next }      </div>
            </div>
        </div>
    );
};

export default Carousel;

