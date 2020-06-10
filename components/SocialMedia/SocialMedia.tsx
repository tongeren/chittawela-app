import SVGButton from '../SVGButton/SVGButton';
import { SocialMediaProps } from './types';

const SocialMedia:React.FunctionComponent<SocialMediaProps> = ({ media }):React.ReactElement => {
    return ( 
        <div className="social-media">
            { media.map((item, key) => <SVGButton key={ key } { ...item } classes="social-media__button" /> ) }
        </div>
    );
};

export default SocialMedia;
