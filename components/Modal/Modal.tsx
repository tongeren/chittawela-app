// Modal the properties show and closeHandler are related: closeHandler must set the state of show to false
import { ModalProps } from './types';

const Modal:React.FunctionComponent<ModalProps> = ({ show, children, closeHandler }):React.ReactElement => {  
    return (
        <div className={ show ? "modal modal--active" : "modal" } onClick={ () => closeHandler() }> 
            { children }
        </div>
    );
}

Modal.displayName = "Modal";

export default Modal;