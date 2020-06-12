import { forwardRef } from 'react';
// import addClasses from '../../helpers/classes/addClasses';
import { NavAnchorProps } from './types';

const NavAnchor:React.ForwardRefExoticComponent<NavAnchorProps> = forwardRef(({ text, onClick, href }, ref):React.ReactElement => {   
    return (
        <a className={ "anchor" } href={ href } onClick = { onClick } ref={ ref }>
            { text }
        </a>
    );
});

export default NavAnchor;