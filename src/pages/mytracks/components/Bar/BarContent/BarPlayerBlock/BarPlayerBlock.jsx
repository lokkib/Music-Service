import BarPlayerPlayer from './BarPlayerPlayer/BarPlayerPlayer';
import BarVolume from './BarVolumeBlock/BarVolume';
import { StyledBarPlayerBlock } from './StyledBarPlayerBlock';

function BarPlayerBlock() {
    return (
        <StyledBarPlayerBlock>
            <BarPlayerPlayer />
            <BarVolume />
        </StyledBarPlayerBlock>
    );
}

export default BarPlayerBlock;
