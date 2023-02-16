import BarPlayerPlayer from './BarPlayerPlayer/BarPlayer';
import BarVolume from './BarVolumeBlock/BarVolume';
import { StyledBarPlayerBlock } from './StyledBarPlayerBlock';

const BarPlayerBlock = ({ getValues }) => (
    <StyledBarPlayerBlock>
        <BarPlayerPlayer getValues={getValues} />
        <BarVolume />
    </StyledBarPlayerBlock>
);

export default BarPlayerBlock;
