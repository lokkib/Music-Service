import BarPlayerPlayer from './BarPlayerPlayer/BarPlayerPlayer';
import BarVolume from './BarVolumeBlock/BarVolume';
import './BarPlayerBlock.scss';

function BarPlayerBlock() {
    return (
        <div className="bar__player-block">
            <BarPlayerPlayer />
            <BarVolume />
        </div>
    );
}

export default BarPlayerBlock;
