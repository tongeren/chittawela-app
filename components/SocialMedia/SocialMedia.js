import SVGButton from '../SVGButton/SVGButton';
const media = [
    { "sprite": "facebook" },
    { "sprite": "twitter" },
    { "sprite": "pinterest" },
    { "sprite": "instagram" },
    { "sprite": "youtube" }
];

const SocialMedia = () => {
    return ( 
        <div className="social-media">
            { media.map((item, key) => <SVGButton key={ key } { ...item } classes="social-media__button" /> ) }
        </div>
    );
};

export default SocialMedia;
