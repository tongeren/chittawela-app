export interface ModalProps {
    show: boolean
    closeHandler: () => void // closeHandler must set the state of show to false
}