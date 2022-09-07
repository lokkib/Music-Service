import './TrackPlayContain.scss';

function TrackPlayContain() {
    return (
        <div className="track-play__contain">
            <div className="track-play__image">
                <svg className="track-play__svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                    #
                </a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                    #
                </a>
            </div>
        </div>
    );
}

export default TrackPlayContain;
