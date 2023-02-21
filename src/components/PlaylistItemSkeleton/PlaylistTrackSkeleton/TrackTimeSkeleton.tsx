import { TrackTimeIcon } from '../../PlayListItem/PlayListTrack/TrackTime/components/TrackTimeIcon';
import { TrackTimeText } from '../../PlayListItem/PlayListTrack/TrackTime/components/TrackTimeText';

const TrackTimeSkeleton = () => (
    <div className="track__time">
        <TrackTimeIcon />

        <TrackTimeText />
    </div>
);

export default TrackTimeSkeleton;
