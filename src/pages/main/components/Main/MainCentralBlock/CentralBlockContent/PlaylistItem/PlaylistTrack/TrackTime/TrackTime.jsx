import { TrackTimeIcon } from './TrackTimeComponents/TrackTimeIcon';
import { TrackTimeText } from './TrackTimeComponents/TrackTimeText';

// import { useSelector } from 'react-redux';

function TrackTime({ duration }) {
    return (
        <div className="track__time">
            <TrackTimeIcon />

            <TrackTimeText>{(duration / 60).toFixed(2)}</TrackTimeText>
        </div>
    );
}

export default TrackTime;
