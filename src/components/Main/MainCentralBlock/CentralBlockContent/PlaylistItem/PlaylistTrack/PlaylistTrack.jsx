import TrackTitle from './TrackTitle/TrackTitle';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackTime from './TrackTime/TrackTme';

import { StyledPlaylistTrack } from './StyledPlaylistTrack';

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
