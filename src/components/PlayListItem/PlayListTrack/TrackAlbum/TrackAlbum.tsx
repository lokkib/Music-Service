import { TrackAlbumLink } from './components/TrackAlbumLink';
import { TrackAlbumBlock } from './components/TrackAlbumBlock';
import { TrackAlbumProps } from '../../../../@types/props/TrackAlbumProps';

const TrackAlbum = ({ album }: TrackAlbumProps) => (
    <TrackAlbumBlock>
        <TrackAlbumLink>{album}</TrackAlbumLink>
    </TrackAlbumBlock>
);

export default TrackAlbum;
