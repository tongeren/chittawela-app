export type PictureProps = {
    media: string,
    srcSet: string,
    sizes: string,
    src: string,
    alt: string,
    sectionName: string
};

export type TransformationProps = {
    before: PictureProps,
    after: PictureProps
};

