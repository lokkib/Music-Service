import { TrackTitleBlock } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTitle/components/TrackTitleBlock';
import { TrackTitleImage } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTitle/components/TrackTitleImage';
import { TrackTitleLink } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTitle/components/TrackTitleLink';
import { TrackTitleSpan } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTitle/components/TrackTitleSpan';

const TrackTitleSkeleton = () => (
    <TrackTitleBlock>
        <TrackTitleImage>
            <img alt="skeleton-track" src="../img/Skeleton-track.png" />
        </TrackTitleImage>

        <div className="track__title-text">
            <TrackTitleLink>
                <img
                    alt="skeleton-track-title"
                    src="../img/Skeleton-track-title.png"
                />
                <TrackTitleSpan />
            </TrackTitleLink>
        </div>
    </TrackTitleBlock>
);

export default TrackTitleSkeleton;
