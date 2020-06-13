import { VideoProps } from './types';

const Video:React.FunctionComponent<VideoProps>= ({ src }):React.ReactElement => {
    return (
        <div className="video u-margin-bottom-medium">
            <div className="video__vimeo">
                <iframe 
                    id="vimeo"                    // for use to find the Vimeo player object
                    className="video__iframe" 
                    src={ src } 
                    allow="fullscreen"
                />
            </div>
        </div>
    );
};

Video.displayName = "Video";

export default Video;