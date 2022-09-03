import PlayerControls from './player-controls/PlayerControls';
import PlayerTrackPlay from './player-track-play/PlayerTrackPlay';

function BarPlayerPlayer() {
    return (
        <div className="bar__player player">
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    );
}

export default BarPlayerPlayer;
