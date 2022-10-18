import { StyledPlaylistTrack } from './StyledPlaylistTrack';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackTime from './TrackTime/TrackTme';
import TrackTitle from './TrackTitle/TrackTitle';

function PlaylistTrack() {
    return (
        <StyledPlaylistTrack>
            <TrackTitle />
            <TrackAuthor />
            <TrackAlbum />
            <TrackTime />
        </StyledPlaylistTrack>
    );
}

export default PlaylistTrack;
