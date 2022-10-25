import { TrackPlayDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayDislikeContainer';
import { TrackPlayLikeDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayerLikeDislikeContainer';
import { TrackPlayLikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayLikeContainer';
import { PlayIconDislike } from './TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import { PlayIconLike } from './TrackPlayLikeDislikeIcons/StyledPlayIconLike';

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
