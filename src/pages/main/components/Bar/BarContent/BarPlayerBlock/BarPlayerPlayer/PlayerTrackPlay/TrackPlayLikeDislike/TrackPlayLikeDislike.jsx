import * as S from './StyledTrackPlayLikeDislike';
import * as Styled from './TrackPlayLikeDislikeIcons/StyledPlayIcons';

function TrackPlayLikeDislike() {
    return (
        <S.TrackPlayLikeDislike>
            <S.TrackPlayLike>
                <Styled.PlayIconLike alt="like" />
            </S.TrackPlayLike>

            <S.TrackPlayDislike>
                <Styled.PlayIconDislike alt="dislike" />
            </S.TrackPlayDislike>
        </S.TrackPlayLikeDislike>
    );
}

export default TrackPlayLikeDislike;
