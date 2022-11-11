import { StyledPlaylistTrack } from './StyledPlaylistTrack';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackTime from './TrackTime/TrackTime';
import TrackTitle from './TrackTitle/TrackTitle';

function PlaylistTrack({ src, duration, album, author, name }) {
    return (
        <StyledPlaylistTrack>
            <TrackTitle album={album} author={author} src={src} name={name} />
            <TrackAuthor author={author} />
            <TrackAlbum album={album} />
            <TrackTime duration={duration} />
        </StyledPlaylistTrack>
    );
}

export default PlaylistTrack;
