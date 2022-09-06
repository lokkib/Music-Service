import './BarVolume.scss';
import BarVolumeIcon from './BarVolumeIcon';

function BarVolume() {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <BarVolumeIcon
                        className="volume__svg"
                        alt="volume"
                    ></BarVolumeIcon>
                </div>
                <div className="volume__progress _btn">
                    <input
                        className="volume__progress-line"
                        type="range"
                        name="range"
                    />
                </div>
            </div>
        </div>
    );
}

export default BarVolume;
