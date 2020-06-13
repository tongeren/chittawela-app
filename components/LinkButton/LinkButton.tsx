import Link from 'next/link';
import Button from '../Button/Button';
import { LinkButtonProps } from './types';

const LinkButton:React.FunctionComponent<LinkButtonProps> = ({ href, text }) => {
    return (
        <Link href={ href }>
            <Button classes={ "button--white-orange" } text={ text } />
        </Link>
    );
};

LinkButton.displayName = "LinkButton";

export default LinkButton;