import { StyledPlayerTrackPlay } from './StyledPlayerTrackPlay';
import TrackPlayContain from './TrackPlayContain/TrackPlayContain';
import TrackPlayLikeDislike from './TrackPlayLikeDislike/TrackPlayLikeDislike';

const PlayerTrackPlay = () => (
    <StyledPlayerTrackPlay>
        <TrackPlayContain />
        <TrackPlayLikeDislike />
    </StyledPlayerTrackPlay>
);

export default PlayerTrackPlay;
