import { PlaylistTitleTrack } from '../ContentTitleBlock/PlayListTitleTrack';
import StyledPlayListItem from '../PlayListItem/StyledPlayListItem';
import TrackAlbumSkeleton from './PlaylistTrackSkeleton/TrackAlbumSkeleton';
import TrackAuthorSkeleton from './PlaylistTrackSkeleton/TrackAuthorSkeleton';
import TrackTimeSkeleton from './PlaylistTrackSkeleton/TrackTimeSkeleton';
import TrackTitleSkeleton from './PlaylistTrackSkeleton/TrackTitleSkeleton';

const PlaylistItemSkeleton = () => (
    <StyledPlayListItem>
        <PlaylistTitleTrack>
            <TrackTitleSkeleton />
            <TrackAuthorSkeleton />
            <TrackAlbumSkeleton />
            <TrackTimeSkeleton />
        </PlaylistTitleTrack>
    </StyledPlayListItem>
);

export default PlaylistItemSkeleton;
