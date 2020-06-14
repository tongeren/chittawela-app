import { LinkText } from '../../types/types';
import { SyntheticEvent } from 'react';

export interface LinkAnchorProps extends LinkText {
    classes?: string
    onClick?: (event: SyntheticEvent) => void
}