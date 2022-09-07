import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import './BarPlayerPlayer.scss';

function BarPlayerPlayer() {
    return (
        <div className="bar__player player">
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    );
}

export default BarPlayerPlayer;
