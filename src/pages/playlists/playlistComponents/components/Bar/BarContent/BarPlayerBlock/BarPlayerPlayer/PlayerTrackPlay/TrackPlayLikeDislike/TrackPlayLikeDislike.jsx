import { PlayIconDislike } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import { PlayIconLike } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconLike';
import * as S from './StyledTrackPlayLikeDislike';

function TrackPlayLikeDislike() {
    return (
        <S.TrackPlayLikeDislike>
            <S.TrackPlayLike>
                <PlayIconLike alt="like" />
            </S.TrackPlayLike>

            <S.TrackPlayDislike>
                <PlayIconDislike alt="dislike" />
            </S.TrackPlayDislike>
        </S.TrackPlayLikeDislike>
    );
}

export default TrackPlayLikeDislike;
