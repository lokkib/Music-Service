import TrackAlbum from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackAlbum/TrackAlbum';
import TrackAuthor from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackAuthor/TrackAuthor';
import TrackTime from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackTime/TrackTime';
import TrackTitle from '../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackTitle/TrackTitle';
import { StyledPlaylistTrack } from './StyledPlaylistTrack';

function PlaylistTrack() {
    return (
        <StyledPlaylistTrack>
            <TrackTitle />
            <TrackAuthor />
            <TrackAlbum />
            <TrackTime />
        </StyledPlaylistTrack>
    );
}

export default PlaylistTrack;
