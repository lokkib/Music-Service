import { StyledPlayListTrack } from './StyledPlayListTrack';
import TrackAlbum from './TrackAlbum/TrackAlbum';
import TrackAuthor from './TrackAuthor/TrackAuthor';
import TrackTime from './TrackTime/TrackTime';
import TrackTitle from './TrackTitle/TrackTitle';
import { PlaylistItemProps } from '../../../@types/props/PlayListItemProps';

const PlaylistTrack = ({
    track,
    id,
    index,
    src,
    duration,
    album,
    author,
    name,
}: PlaylistItemProps) => (
    <StyledPlayListTrack>
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
    </StyledPlayListTrack>
);

export default PlaylistTrack;
