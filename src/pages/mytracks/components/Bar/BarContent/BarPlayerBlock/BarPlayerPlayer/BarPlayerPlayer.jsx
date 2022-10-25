import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayerPlayer } from './StyledBarPlayerPlayer';

function BarPlayerPlayer() {
    return (
        <StyledBarPlayerPlayer>
            <PlayerControls />
            <PlayerTrackPlay />
        </StyledBarPlayerPlayer>
    );
}

export default BarPlayerPlayer;
