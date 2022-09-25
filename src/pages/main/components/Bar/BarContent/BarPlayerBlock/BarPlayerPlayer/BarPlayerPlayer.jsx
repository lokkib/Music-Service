import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';

import { StyledBarPlayerPlayer } from './StyledBarPlayerPlayer';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import { useRef } from 'react';

function BarPlayerPlayer() {
    const refPlayer = useRef(null);

    return (
        <StyledBarPlayerPlayer>
            <Audio ref={refPlayer} />
            <PlayerControls />
            <PlayerTrackPlay />
        </StyledBarPlayerPlayer>
    );
}

export default BarPlayerPlayer;
