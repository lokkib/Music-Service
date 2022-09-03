import TrackTitle from './track-title/TrackTitle';
import TrackAuthor from './track-author/TrackAuthor';
import TrackAlbum from './track-album/TrackAlbum';
import TrackTime from './track-time/TrackTme';

function PlaylistTrack({ cls = 'playlist__track track' }) {
    return (
        <div className={cls}>
            <TrackTitle />
            <TrackAuthor />
            <TrackAlbum />
            <TrackTime />
        </div>
    );
}

export default PlaylistTrack;
