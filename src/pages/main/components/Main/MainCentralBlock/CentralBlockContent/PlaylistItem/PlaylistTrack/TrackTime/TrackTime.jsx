import { TrackTimeIcon } from './TrackTimeComponents/TrackTimeIcon';
import { TrackTimeText } from './TrackTimeComponents/TrackTimeText';

function TrackTime() {
    return (
        <div className="track__time">
            <TrackTimeIcon />

            <TrackTimeText>#</TrackTimeText>
        </div>
    );
}

export default TrackTime;
