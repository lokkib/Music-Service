import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem({ name, album, author, duration, src }) {
    return (
        <StyledPlaylistItem>
            <PlaylistTrack name={name} album={album} author={author} duration={duration} src={src} />
        </StyledPlaylistItem>
    );
}

export default PlaylistItem;
