import BarPlayerPlayer from './BarPlayerPlayer/BarPlayer';
import BarVolume from './BarVolumeBlock/BarVolume';
import { StyledBarPlayerBlock } from './StyledBarPlayerBlock';

function BarPlayerBlock({ getValues }) {
    return (
        <StyledBarPlayerBlock>
            <BarPlayerPlayer getValues={getValues} />
            <BarVolume />
        </StyledBarPlayerBlock>
    );
}

export default BarPlayerBlock;
