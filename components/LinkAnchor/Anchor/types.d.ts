import { Classes } from '../../../helpers/classes/addClasses';

export interface AnchorProps {
    classes?: Classes
    text: string
    href?: string                                                         // set by wrapping Link component
    onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void  // set by wrapping Link component    
    ref?: React.Ref<HTMLAnchorElement>                                    // set by wrapping Link component
}