import { useState, useEffect } from 'react';
import Player from '@vimeo/player';

const OPTIONS = {
    id: 395625673,
    width: 640
};

const usePlayer = () => {
    const hasWindow = typeof window !== 'undefined';

    // Get the Vimeo Player object
    function getPlayer() {
        const player = hasWindow ? new Player("vimeo-video", OPTIONS) : null;
    
        return player;
    }

    const [playerState, setPlayer] = useState(getPlayer());

    return playerState;
};

export default usePlayer;