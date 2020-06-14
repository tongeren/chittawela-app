import { MenuButtonProps } from '../../client/MenuButton/types';
import { SyntheticEvent } from 'react';

export interface MenuModalProps extends MenuButtonProps{
    show: boolean
    closeModal: (event: SyntheticEvent) => void
}