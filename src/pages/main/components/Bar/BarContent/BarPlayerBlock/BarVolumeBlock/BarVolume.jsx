import { BarVolumeContainer } from './BarVolumeComponents/BarVolume';
import { VolumeContent } from './BarVolumeComponents/VolumeContent';
import { VolumeImage } from './BarVolumeComponents/VolumeImage';
import { VolumeProgressBtn } from './BarVolumeComponents/VolumeProgressBtn';
import { VolumeProgressLine } from './BarVolumeComponents/VolumeProgressLine';
import BarVolumeIcon from './BarVolumeIcon';

function BarVolume() {
    return (
        <BarVolumeContainer>
            <VolumeContent>
                <VolumeImage>
                    <BarVolumeIcon
                        className="volume__svg"
                        alt="volume"
                    ></BarVolumeIcon>
                </VolumeImage>

                <VolumeProgressBtn>
                    <VolumeProgressLine />
                </VolumeProgressBtn>
            </VolumeContent>
        </BarVolumeContainer>
    );
}

export default BarVolume;
