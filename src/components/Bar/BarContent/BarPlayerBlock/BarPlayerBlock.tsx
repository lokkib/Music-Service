import BarPlayerPlayer from './BarPlayerPlayer/BarPlayer';
import BarVolume from './BarVolumeBlock/BarVolume';
import { StyledBarPlayerBlock } from './StyledBarPlayerBlock';

const BarPlayerBlock = () => (
    <StyledBarPlayerBlock>
        <BarPlayerPlayer />
        <BarVolume />
    </StyledBarPlayerBlock>
);

export default BarPlayerBlock;
