import TrackPlayContain from './TrackPlayContain/TrackPlayContain';
import TrackPlayLikeDislike from './TrackPlayLikeDislike/TrackPlayLikeDislike';
import './PlayerTrackPlay.scss';

function PlayerTrackPlay() {
    return (
        <div className="player__track-play track-play">
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </div>
    );
}

export default PlayerTrackPlay;
