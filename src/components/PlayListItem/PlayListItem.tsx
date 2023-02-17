import PlaylistTrack from './PlayListTrack/PlayListTrack';
import StyledPlayListItem from './StyledPlayListItem';

const PlaylistItem = ({ track, name, album, author, duration, src, index }) => (
    <StyledPlayListItem>
        <PlaylistTrack
            track={track}
            index={index}
            name={name}
            album={album}
            author={author}
            duration={duration}
            src={src}
        />
    </StyledPlayListItem>
);

export default PlaylistItem;
