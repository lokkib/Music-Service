import TrackPlayContain from './track-play-contain/TrackPlayContain';
import TrackPlayLikeDislike from './track-play-like-dislike/TrackPlayLikeDislike';

function PlayerTrackPlay() {
    return (
        <div className="player__track-play track-play">
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </div>
    );
}

export default PlayerTrackPlay;
