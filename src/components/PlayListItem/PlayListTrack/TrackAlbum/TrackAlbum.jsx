import { TrackAlbumLink } from './components/TrackAlbumLink';
import { TrackAlbumBlock } from './components/TrackAlbumBlock';

const TrackAlbum = ({ album }) => (
    <TrackAlbumBlock>
        <TrackAlbumLink>{album}</TrackAlbumLink>
    </TrackAlbumBlock>
);

export default TrackAlbum;
