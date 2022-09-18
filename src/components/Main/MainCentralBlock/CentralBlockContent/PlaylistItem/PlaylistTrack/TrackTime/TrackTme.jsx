import * as S from './StyledTrackTime';

function TrackTime() {
    return (
        <div className="track__time">
            <S.TrackTimeIcon />

            <S.TrackTimeText>#</S.TrackTimeText>
        </div>
    );
}

export default TrackTime;
