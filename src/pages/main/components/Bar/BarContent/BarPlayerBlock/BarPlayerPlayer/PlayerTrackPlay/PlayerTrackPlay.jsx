import TrackPlayContain from './TrackPlayContain/TrackPlayContain';
import TrackPlayLikeDislike from './TrackPlayLikeDislike/TrackPlayLikeDislike';
import { StyledPlayerTrackPlay } from './StyledPlayerTrackPlay';

function PlayerTrackPlay() {
    return (
        <StyledPlayerTrackPlay>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </StyledPlayerTrackPlay>
    );
}

export default PlayerTrackPlay;
