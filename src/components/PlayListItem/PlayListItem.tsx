import PlaylistTrack from './PlayListTrack/PlayListTrack';
import StyledPlayListItem from './StyledPlayListItem';
import { PlaylistItemProps } from '../../@types/props/PlayListItemProps';

const PlaylistItem = ({
    track,
    name,
    album,
    author,
    duration,
    src,
    index,
    id,
}: PlaylistItemProps) => (
    <StyledPlayListItem>
        <PlaylistTrack
            id={id}
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
