// Modal the properties show and closeHandler are related: closeHandler must set the state of show to false
export interface IModal {
    show: boolean
    closeHandler: () => void // closeHandler must set the state of show to false
}

const Modal:React.FunctionComponent<IModal> = ({ show, children, closeHandler }):React.ReactElement => {  
    return (
        <div 
            className={ show ? "modal modal--active" : "modal" } 
            onClick={ () => closeHandler() }
            onTouchStart={ () => closeHandler() }> 
            { children }
        </div>
    );
}

Modal.displayName = "Modal";

export default Modal;

