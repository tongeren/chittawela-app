import Link from 'next/link';
import Anchor from './Anchor/Anchor';
import { LinkAnchorProps } from './types';

const LinkAnchor:React.FunctionComponent<LinkAnchorProps> = ({ classes, href, text, onClick }):React.ReactElement => {
    return (
        <Link href={ href }>
            <Anchor 
                classes={ classes ? classes :"button--white-orange" } 
                text={ text } 
                onClick={ onClick }
            />
        </Link>
    );
};

LinkAnchor.displayName = "LinkAnchor";

export default LinkAnchor;

