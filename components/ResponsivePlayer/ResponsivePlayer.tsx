// The following code still gives errors on seekTo.
// This looks however to be an error in the react-player code itself.
// Continuing the video next time from where we left off instead of going back to the beginning can actually be a nice feature!

// import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { ResponsivePlayerProps } from './types';

const ResponsivePlayer:React.FunctionComponent<ResponsivePlayerProps> = ({ url, show, playing, onEnded, width, height, style }):React.ReactElement =>  {
    // const observed = useRef(null);

    // useEffect( () => {
    //     const player = observed.current;
    //     console.log("ResponsivePlayer: observed", observed);
    //     console.log("ResponsivePlayer: observed.current", observed.current)
    //     console.log("ResponsivePlayer: player", player)
        
    //     // Always start video at the beginning again after render
    //     player.seekTo(0);
    // }, [observed]);

    // console.log("ResponsivePlayer: observed", observed);
    
    return (
        <div className="player-wrapper" style={ style }>
            <ReactPlayer
                // ref={ observed }
                className="react-player"
                url={ url }
                playing={ show ? playing : false }
                onEnded={ onEnded }
                width={ width ? width : '100%' }
                height={ height ? height : '100%' } 
                style={ show ? null : { display: 'none' } }
            />
        </div>
    );
}

ResponsivePlayer.displayName = "ResponsivePlayer";

export default ResponsivePlayer;