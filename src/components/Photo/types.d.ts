import CSS from 'csstype';

export interface PhotoProps {
    id?: string
    media?: string 
    srcSet?: string
    sizes?: string
    src: string
    alt: string
    name: string
    styles?: CSS.Properties
}