import { Classes } from '../../../helpers/classes/addClasses';
import { SyntheticEvent } from 'react';

export interface AnchorProps {
    classes?: Classes
    text: string
    href?: string                                   // set by wrapping Link component
    onClick?: (event: SyntheticEvent) => void       // set by wrapping Link component    
    ref?: React.Ref<HTMLAnchorElement>              // set by wrapping Link component
}