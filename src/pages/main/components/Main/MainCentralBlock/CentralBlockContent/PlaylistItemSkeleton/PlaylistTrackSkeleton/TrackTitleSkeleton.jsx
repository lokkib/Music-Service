import { TrackTitleBlock } from '../../PlaylistItem/PlaylistTrack/TrackTitle/TrackTitleComponents/TrackTitleBlock';
import { TrackTitleImage } from '../../PlaylistItem/PlaylistTrack/TrackTitle/TrackTitleComponents/TrackTitleImage';
import { TrackTitleLink } from '../../PlaylistItem/PlaylistTrack/TrackTitle/TrackTitleComponents/TrackTitleLink';
import { TrackTitleSpan } from '../../PlaylistItem/PlaylistTrack/TrackTitle/TrackTitleComponents/TrackTitleSpan';

function TrackTitleSkeleton() {
    return (
        <TrackTitleBlock>
            <TrackTitleImage>
                <img src="../img/Skeleton-track.png"></img>
            </TrackTitleImage>

            <div className="track__title-text">
                <TrackTitleLink>
                    <img src="../img/Skeleton-track-title.png"></img>
                    <TrackTitleSpan />
                </TrackTitleLink>
            </div>
        </TrackTitleBlock>
    );
}

export default TrackTitleSkeleton;
