import CSS from 'csstype';

export interface ResponsivePlayerProps {
    url: string
    show: boolean
    playing: boolean
    onEnded: () => void
    width?: string
    height?: string
    style?: CSS.Properties
}
