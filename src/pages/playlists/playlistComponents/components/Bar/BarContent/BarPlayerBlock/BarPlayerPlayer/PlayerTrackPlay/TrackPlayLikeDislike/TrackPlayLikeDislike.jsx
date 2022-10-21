import { TrackPlayDislikeContainer } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayerLikeDislikeContainers/TrackPlayDislikeContainer';
import { TrackPlayLikeDislikeContainer } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayerLikeDislikeContainers/TrackPlayerLikeDislikeContainer';
import { TrackPlayLikeContainer } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayerLikeDislikeContainers/TrackPlayLikeContainer';
import { PlayIconDislike } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import { PlayIconLike } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconLike';

function TrackPlayLikeDislike() {
    return (
        <TrackPlayLikeDislikeContainer>
            <TrackPlayLikeContainer>
                <PlayIconLike alt="like" />
            </TrackPlayLikeContainer>

            <TrackPlayDislikeContainer>
                <PlayIconDislike alt="dislike" />
            </TrackPlayDislikeContainer>
        </TrackPlayLikeDislikeContainer>
    );
}

export default TrackPlayLikeDislike;
