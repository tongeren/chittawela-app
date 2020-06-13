import { forwardRef } from 'react';
import addClasses from '../../helpers/classes/addClasses';
import { ButtonProps } from './types';

const Button:React.ForwardRefExoticComponent<ButtonProps> = forwardRef(({ classes, text, onClick, href }, ref):React.ReactElement => {   
    return (
        <a className={ addClasses("button", classes) } href={ href } onClick = { onClick } ref={ ref }>
            { text }
        </a>
    );
});

Button.displayName = "Button";

export default Button;

