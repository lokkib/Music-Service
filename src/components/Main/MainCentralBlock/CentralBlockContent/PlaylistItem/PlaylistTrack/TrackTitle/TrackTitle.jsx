import './TrackTitle.scss';

function TrackTitle(link = 'http://') {
    return (
        <div className="track__title">
            <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track__title-text">
                <a className="track__title-link" href={link}>
                    #<span className="track__title-span"></span>
                </a>
            </div>
        </div>
    );
}

export default TrackTitle;
