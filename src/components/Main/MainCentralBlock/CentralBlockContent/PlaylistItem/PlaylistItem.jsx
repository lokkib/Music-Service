import PlaylistTrack from './PlaylistTrack/PlaylistTrack';

import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem() {
    return (
        <StyledPlaylistItem>
  <PlaylistTrack />
        </StyledPlaylistItem>
        // <div className={className}>
          
        // </div>
    );
}

export default PlaylistItem;
