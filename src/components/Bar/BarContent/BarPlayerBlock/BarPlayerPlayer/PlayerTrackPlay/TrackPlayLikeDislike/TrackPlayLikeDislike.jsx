import './TrackPlayLikeDislike.scss';
import TrackPlayLikeIcon from './TrackPlayLikeDislikeIcons/TrackPlayLikeIcon';
import TrackPlayDislikeIcon from './TrackPlayLikeDislikeIcons/TrackPlayDislikeIcon';

function TrackPlayLikeDislike() {
    return (
        <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
                <TrackPlayLikeIcon
                    className="track-play__like-svg"
                    alt="like"
                ></TrackPlayLikeIcon>
            </div>
            <div className="track-play__dislike _btn-icon">
                <TrackPlayDislikeIcon
                    className="track-play__dislike-svg"
                    alt="dislike"
                ></TrackPlayDislikeIcon>
            </div>
        </div>
    );
}

export default TrackPlayLikeDislike;
