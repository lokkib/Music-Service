import './PlayerControls.scss';
import PlayerControlsPrev from './PlayerControlsIcons/PlayerControlsPrev';
import PlayerControlsPlay from './PlayerControlsIcons/PlayerControlsPlay';
import PlayerControlsNext from './PlayerControlsIcons/PlayerControlsNext';
import PlayerControlsRepeat from './PlayerControlsIcons/PlayerControlsRepeat';
import PlayerControlsShuffle from './PlayerControlsIcons/PlayerControlsShuffle';

function PlayerControls() {
    return (
        <div className="player__controls">
            <div className="player__btn-prev">
                <PlayerControlsPrev
                    cls="player__btn-prev-svg"
                    alt="prev"
                ></PlayerControlsPrev>
            </div>
            <div className="player__btn-play _btn">
                <PlayerControlsPlay
                    cls="player__btn-play-svg"
                    alt="play"
                ></PlayerControlsPlay>
            </div>
            <div className="player__btn-next">
                <PlayerControlsNext
                    cls="player__btn-next-svg"
                    alt="next"
                ></PlayerControlsNext>
            </div>
            <div className="player__btn-repeat _btn-icon">
                <PlayerControlsRepeat
                    cls="player__btn-repeat-svg"
                    alt="repeat"
                ></PlayerControlsRepeat>
            </div>
            <div className="player__btn-shuffle _btn-icon">
                <PlayerControlsShuffle
                    cls="player__btn-shuffle-svg"
                    alt="shuffle"
                ></PlayerControlsShuffle>
            </div>
        </div>
    );
}

export default PlayerControls;
