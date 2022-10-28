import { StyledPlaylistItem } from "../PlaylistItem/StyledPlaylistItem"
import { StyledPlaylistTrack } from "../PlaylistItem/PlaylistTrack/StyledPlaylistTrack"
import TrackTitleSkeleton from "./PlaylistTrackSkeleton/TrackTitleSkeleton"
import TrackAuthorSkeleton from "./PlaylistTrackSkeleton/TrackAuthorSkeleton"
import TrackAlbumSkeleton from "./PlaylistTrackSkeleton/TrackAlbumSkeleton"
import TrackTimeSkeleton from "./PlaylistTrackSkeleton/TrackTimeSkeleton"

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
    )
}

export default PlaylistItemSkeleton