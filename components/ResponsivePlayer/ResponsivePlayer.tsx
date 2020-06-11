import ReactPlayer from 'react-player/lazy';
import { ResponsivePlayerProps } from './types';
import mergeStyles from '../../helpers/styles/mergeStyles';

const ResponsivePlayer:React.FunctionComponent<ResponsivePlayerProps> = ({ url, show, playing, onEnded, width, height, style }):React.ReactElement =>  {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div className="responsive-player">
            <ReactPlayer
                className="responsive-player__react-player"
                url={ url }
                playing={ show ? playing : false }
                width={ width ? width : '100%' }
                height={ height ? height : '100%' } 
                style={ show ? styles : mergeStyles(styles, { display: 'none' }) }
            />
        </div>
    );
}

export default ResponsivePlayer;