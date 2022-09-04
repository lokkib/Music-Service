import './TrackAlbum.scss';

function TrackAlbum({ link = 'http://' }) {
    return (
        <div className="track__album">
            <a className="track__album-link" href={link}>
                #
            </a>
        </div>
    );
}

export default TrackAlbum;
