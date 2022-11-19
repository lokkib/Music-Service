import { StyledPlaylistTrack } from './StyledPlaylistTrack';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackTime from './TrackTime/TrackTime';
import TrackTitle from './TrackTitle/TrackTitle';

function PlaylistTrack({
    track,
    id,
    index,
    src,
    duration,
    album,
    author,
    name,
}) {
    return (
        <StyledPlaylistTrack>
            <TrackTitle
                track={track}
                id={id}
                duration={duration}
                index={index}
                album={album}
                author={author}
                src={src}
                name={name}
            />
            <TrackAuthor author={author} />
            <TrackAlbum album={album} />
            <TrackTime duration={duration} />
        </StyledPlaylistTrack>
    );
}

export default PlaylistTrack;
