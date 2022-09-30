import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';

import { StyledBarPlayerPlayer } from './StyledBarPlayerPlayer';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import { useState } from 'react';
import { useRef } from 'react';

function BarPlayerPlayer() {
    const refPlayer = useRef(null);

    const [duration, setDuration] = useState(false);
    const [currentTime, setTime] = useState(false);
    const [playing, setPlay] = useState(false);

    return (
        <StyledBarPlayerPlayer>
            <Audio data-d={playing} ref={refPlayer} />
            <PlayerControls
                refAudio={refPlayer}
                duration={duration}
                currentTime={currentTime}
            />
            <PlayerTrackPlay />
        </StyledBarPlayerPlayer>
    );
}

export default BarPlayerPlayer;
