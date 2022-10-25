import { StyledPlayerTrackPlay } from './StyledPlayerTrackPlay';
import TrackPlayContain from './TrackPlayContain/TrackPlayContain';
import TrackPlayLikeDislike from './TrackPlayLikeDislike/TrackPlayLikeDislike';

function PlayerTrackPlay() {
    return (
        <StyledPlayerTrackPlay>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </StyledPlayerTrackPlay>
    );
}

export default PlayerTrackPlay;
