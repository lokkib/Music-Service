import { TrackTimeIcon } from './components/TrackTimeIcon';
import { TrackTimeText } from './components/TrackTimeText';
import { TrackTimeProps } from '../../../../@types/props/TrackTimeProps';

const TrackTime = ({ duration }: TrackTimeProps) => (
    <div className="track__time">
        <TrackTimeIcon />

        <TrackTimeText>{(duration / 60).toFixed(2)}</TrackTimeText>
    </div>
);

export default TrackTime;
