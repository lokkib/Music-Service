import TrackPlayLikeDislike from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislike';
import { StyledPlayerTrackPlay } from './StyledPlayerTrackPlay';
import TrackPlayContain from './TrackPlayContain/TrackPlayContain';

function PlayerTrackPlay() {
    return (
        <StyledPlayerTrackPlay>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </StyledPlayerTrackPlay>
    );
}

export default PlayerTrackPlay;
