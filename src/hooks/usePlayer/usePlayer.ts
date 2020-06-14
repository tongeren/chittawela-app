import { useState, useEffect } from 'react';
import Player from '@vimeo/player';

const OPTIONS = {
    id: 395625673,
    width: 640
};

// Get the Vimeo Player object
function getPlayer() {
    const hasWindow = typeof window !== 'undefined';
    const player = hasWindow ? new Player("vimeo-video", OPTIONS) : null;

    return player;
}

const usePlayer = ():Player => {
    const [playerState, setPlayer] = useState(getPlayer());

    useEffect( () => {
        setPlayer(getPlayer());
    }, []);

    return playerState;
};

export default usePlayer;