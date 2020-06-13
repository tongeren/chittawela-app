import Link from 'next/link';
import NavAnchor from '../NavAnchor/NavAnchor';
import { LinkNavAnchorProps } from './types';

const LinkNavAnchor:React.FunctionComponent<LinkNavAnchorProps> = ({ href, text }) => {
    return (
        <Link href={ href }>
            <NavAnchor text={ text } />
        </Link>
    );
};

LinkNavAnchor.displayName = "LinkNavAnchor";

export default LinkNavAnchor;