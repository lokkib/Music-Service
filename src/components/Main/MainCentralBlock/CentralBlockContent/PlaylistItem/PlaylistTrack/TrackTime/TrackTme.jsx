
import * as S from './StyledTrackTime'

function TrackTime() {
    return (
        <div className="track__time">
            <S.TrackTimeIcon/>
            {/* <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg> */}
            <S.TrackTimeText>#</S.TrackTimeText>
            {/* <span className="track__time-text">#</span> */}
        </div>
    );
}

export default TrackTime;
