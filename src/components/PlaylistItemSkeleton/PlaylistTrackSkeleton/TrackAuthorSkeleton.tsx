import { TrackAuthorBlock } from '../../PlayListItem/PlayListTrack/TrackAuthor/components/TrackAuthorBlock';
import { TrackAuthorLink } from '../../PlayListItem/PlayListTrack/TrackAuthor/components/TrackAuthorLink';

const TrackAuthorSkeleton = () => (
    <TrackAuthorBlock>
        <TrackAuthorLink>
            <img alt="skeleton" src="../img/Skeleton-track-author.png" />
        </TrackAuthorLink>
    </TrackAuthorBlock>
);

export default TrackAuthorSkeleton;
