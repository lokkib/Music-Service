import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import { StyledPlaylistItem } from './StyledPlaylistItem';

function PlaylistItem({name, album, author, duration, src}) {
  
    return (
        <StyledPlaylistItem >
            <PlaylistTrack src={src} duration={duration} album={album} author={author} name={name} />
        </StyledPlaylistItem>
    );
}

export default PlaylistItem;
