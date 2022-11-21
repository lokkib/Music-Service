import { TrackTimeIcon } from '../../PlaylistItem/PlaylistTrack/TrackTime/TrackTimeComponents/TrackTimeIcon';
import { TrackTimeText } from '../../PlaylistItem/PlaylistTrack/TrackTime/TrackTimeComponents/TrackTimeText';

function TrackTimeSkeleton() {
    return (
        <div className="track__time">
            <TrackTimeIcon />

            <TrackTimeText></TrackTimeText>
        </div>
    );
}

export default TrackTimeSkeleton;
