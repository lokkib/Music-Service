import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem({ track, name, album, author, duration, src, index }) {
    return (
        <StyledPlaylistItem>
            <PlaylistTrack
                track={track}
                index={index}
                name={name}
                album={album}
                author={author}
                duration={duration}
                src={src}
            />
        </StyledPlaylistItem>
    );
}

export default PlaylistItem;
