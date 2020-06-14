import CarouselInput from './CarouselInput/CarouselInput';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import CarouselLabel from './CarouselLabel/CarouselLabel';
import Photo from '../Photo/Photo';
import { CarouselProps } from './types';

const Carousel:React.FunctionComponent<CarouselProps> = ({ name, slides }):React.ReactElement => {
    // Determine the length of the photos array
    const no = slides.length;

    let slide;
    const inputs = [];
    const photos = [];
    const thumbnails = [];
    const quick = [];
    const prev = [];
    const next = [];

    for (let i = 1; i <= no; i++) {
        // Get the current slide
        slide = slides[ i - 1 ];

        // Populate the inputs 
        inputs.push(
            <CarouselInput key={ i } name={ name } number={ i }/>
        );

        // Populate the photo slides 
        photos.push(
            <CarouselSlide key={ i } photo={ slide.photo } />
        );

        // Populate the photo buttons  
        thumbnails.push(
            <CarouselLabel name={ name } group="photo" key={ i } number={ i }>
                <Photo { ...slide.thumbnail } />
            </CarouselLabel>
        );
        
        // Poputate the quick buttons 
        quick.push(
            <CarouselLabel name={ name } group="quick" key={ i } number={ i }/>
        );

        // Populate the prev buttons
        prev.push(
            <CarouselLabel name={ name } group="prev" key={ i } number={ i }/>
        );

        // Populate the next buttons
        next.push(
            <CarouselLabel name={ name } group="next" key={ i } number={ i }/>
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

Carousel.displayName = "Carousel";

export default Carousel;

