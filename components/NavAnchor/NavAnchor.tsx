import { forwardRef } from 'react';
import { NavAnchorProps } from './types';

const NavAnchor:React.ForwardRefExoticComponent<NavAnchorProps> = forwardRef(({ text, onClick, href }, ref):React.ReactElement => {   
    return (
        <a className={ "anchor" } href={ href } onClick = { onClick } ref={ ref }>
            { text }
        </a>
    );
});

NavAnchor.displayName = "NavAnchor";

export default NavAnchor;