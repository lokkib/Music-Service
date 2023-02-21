import { TrackAlbumLink } from '../../PlayListItem/PlayListTrack/TrackAlbum/components/TrackAlbumLink';
import { TrackAlbumBlock } from '../../PlayListItem/PlayListTrack/TrackAlbum/components/TrackAlbumBlock';

const TrackAlbumSkeleton = () => (
    <TrackAlbumBlock>
        <TrackAlbumLink>
            <img alt="skeleton" src="../img/Skeleton-track-album.png" />
        </TrackAlbumLink>
    </TrackAlbumBlock>
);

export default TrackAlbumSkeleton;
