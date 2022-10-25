import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem() {
    return (
        <StyledPlaylistItem>
            <PlaylistTrack />
        </StyledPlaylistItem>
    );
}

export default PlaylistItem;
