export interface ISource {
    device?: string
    source : {
        media: string
        srcSet: string
        sizes?: string
    }
}

export interface IImage  {
    className?: string
    src: string
    alt: string
}

export interface IPicture {
    classes?: string
    sources: ISource[]
    image: IImage
}

const Picture: React.FunctionComponent<IPicture> = ({ classes, sources, image }):React.ReactElement => {    
    return (
        <picture className={ classes }> 
            { sources.map((deviceSource, key) => {
                    const { device, source } = deviceSource;
                    return <source title={ device } key={ key } { ...source } />
                }
            )}
            <img { ...image } />
        </picture>
    );
};

Picture.displayName = "Picture";

export default Picture;