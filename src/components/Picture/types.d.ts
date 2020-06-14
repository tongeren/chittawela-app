export type SourceProps = {
    device?: string
    source : {
        media: string
        srcSet: string
        sizes?: string
    }
};

export type ImageProps = {
    className?: string,
    src: string,
    alt: string
};

export interface PictureProps {
    classes?: string,
    sources: SourceProps[],
    image: ImageProps
}


