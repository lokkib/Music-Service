import { BarVolumeContainer } from './BarVolumeComponents/BarVolume';
import { VolumeContent } from './BarVolumeComponents/VolumeContent';
import { VolumeImage } from './BarVolumeComponents/VolumeImage';
import { VolumeProgressBtn } from './BarVolumeComponents/VolumeProgressBtn';
import { VolumeProgressLine } from './BarVolumeComponents/VolumeProgressLine';
import BarVolumeIcon from './BarVolumeIcon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVolume } from '../../../../../../../redux/ChangingVolume/volumeSlice';

function BarVolume() {

    const [value, setValue] = useState(0)
    const dispatch = useDispatch()

    const changeVolume = () => {
        dispatch(setVolume(value))
    }

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
                    <VolumeProgressLine value={value} onChange={(e) => {setValue(e.target.value); changeVolume()}} />
                </VolumeProgressBtn>
            </VolumeContent>
        </BarVolumeContainer>
    );
}

export default BarVolume;
