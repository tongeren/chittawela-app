import { forwardRef } from 'react';
import addClasses from '../../../helpers/classes/addClasses';
import { AnchorProps } from './types';

const Anchor:React.ForwardRefExoticComponent<AnchorProps> = forwardRef(({ classes, text, onClick, href }, ref):React.ReactElement => {   
    return (
        <a 
            className={ addClasses("button", classes) } 
            href={ href } 
            onClick = { onClick } 
            onTouchStart = { onClick }
            ref={ ref }>
            { text }
        </a>
    );
});

Anchor.displayName = "Anchor";

export default Anchor;

