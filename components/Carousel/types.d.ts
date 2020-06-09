export interface PhotoProps {
    media?: string
    srcSet: string
    sizes: string
    src: string
    alt: string
    sectionName: string
}

export interface SlideProps {
    photo: PhotoProps
    thumbnail: PhotoProps
}

export interface CarouselProps {
    name: string
    slides: SlideProps[]
}