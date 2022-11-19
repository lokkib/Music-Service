import { StyledPlaylistTrack } from '../PlaylistItem/PlaylistTrack/StyledPlaylistTrack';
import { StyledPlaylistItem } from '../PlaylistItem/StyledPlaylistItem';
import TrackAlbumSkeleton from './PlaylistTrackSkeleton/TrackAlbumSkeleton';
import TrackAuthorSkeleton from './PlaylistTrackSkeleton/TrackAuthorSkeleton';
import TrackTimeSkeleton from './PlaylistTrackSkeleton/TrackTimeSkeleton';
import TrackTitleSkeleton from './PlaylistTrackSkeleton/TrackTitleSkeleton';

const PlaylistItemSkeleton = () => {
    return (
        <StyledPlaylistItem>
            <StyledPlaylistTrack>
                <TrackTitleSkeleton />
                <TrackAuthorSkeleton />
                <TrackAlbumSkeleton />
                <TrackTimeSkeleton />
            </StyledPlaylistTrack>
        </StyledPlaylistItem>
    );
};

export default PlaylistItemSkeleton;
