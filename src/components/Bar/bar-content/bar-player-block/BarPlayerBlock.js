import BarPlayerPlayer from './bar-player-player/BarPlayerPlayer';
import BarVolume from './bar-volume-block/BarVolume';

function BarPlayerBlock() {
    return (
        <div className="bar__player-block">
            <BarPlayerPlayer />
            <BarVolume />
        </div>
    );
}

export default BarPlayerBlock;
