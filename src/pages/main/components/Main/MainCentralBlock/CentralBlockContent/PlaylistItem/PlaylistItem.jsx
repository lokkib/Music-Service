import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem({
    track,
    id,
    index,
    name,
    album,
    author,
    duration,
    src,
}) {
    return (
        <StyledPlaylistItem>
            <PlaylistTrack
                track={track}
                id={id}
                index={index}
                src={src}
                duration={duration}
                album={album}
                author={author}
                name={name}
            />
        </StyledPlaylistItem>
    );
}

export default PlaylistItem;
