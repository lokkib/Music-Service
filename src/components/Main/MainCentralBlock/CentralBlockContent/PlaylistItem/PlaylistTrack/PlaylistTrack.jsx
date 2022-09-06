import TrackTitle from './TrackTitle/TrackTitle';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackTime from './TrackTime/TrackTme';
import './PlaylistTrack.scss';

function PlaylistTrack({ className = 'playlist__track track' }) {
    return (
        <div className={className}>
            <TrackTitle />
            <TrackAuthor />
            <TrackAlbum />
            <TrackTime />
        </div>
    );
}

export default PlaylistTrack;
