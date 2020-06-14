export interface PhotoProps {
    media?: string
    srcSet: string
    sizes: string
    src: string
    alt: string
    name: string
}

export interface SlideProps {
    photo: PhotoProps
    thumbnail: PhotoProps
}

export interface CarouselProps {
    name: string
    slides: SlideProps[]
}