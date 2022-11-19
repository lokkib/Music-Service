import { TrackAlbumLink } from './TrackAlbumComponents/TrackAlbumLink';
import { TrackAlbumBlock } from './TrackAlbumComponents/TrackAuthorBlock';

function TrackAlbum({ album }) {
    return (
        <TrackAlbumBlock>
            <TrackAlbumLink>{album}</TrackAlbumLink>
        </TrackAlbumBlock>
    );
}

export default TrackAlbum;
