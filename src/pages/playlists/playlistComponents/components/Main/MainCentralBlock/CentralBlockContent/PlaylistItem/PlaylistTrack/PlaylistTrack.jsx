import TrackAlbum from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackAlbum/TrackAlbum';
import TrackAuthor from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackAuthor/TrackAuthor';
import TrackTime from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackTime/TrackTime';
import TrackTitle from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackTitle/TrackTitle';
import { StyledPlaylistTrack } from './StyledPlaylistTrack';

function PlaylistTrack({ track, src, duration, album, author, name, index }) {
    return (
        <StyledPlaylistTrack>
            <TrackTitle
                track={track}
                index={index}
                duration={duration}
                author={author}
                album={album}
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
