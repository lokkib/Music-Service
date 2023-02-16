import { TrackTimeIcon } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTime/components/TrackTimeIcon';
import { TrackTimeText } from '../../../../../../../components/PlayListItem/PlayListTrack/TrackTime/components/TrackTimeText';

const TrackTimeSkeleton = () => (
    <div className="track__time">
        <TrackTimeIcon />

        <TrackTimeText />
    </div>
);

export default TrackTimeSkeleton;
