import TrackTitle from './TrackTitle/TrackTitle';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackTime from './TrackTime/TrackTme';
import './PlaylistTrack.scss';

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
