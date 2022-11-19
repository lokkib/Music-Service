import BarPlayer from '../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/BarPlayer';
import BarVolume from '../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarVolumeBlock/BarVolume';
import { StyledBarPlayerBlock } from './StyledBarPlayerBlock';

function BarPlayerBlock() {
    return (
        <StyledBarPlayerBlock>
            <BarPlayer />
            <BarVolume />
        </StyledBarPlayerBlock>
    );
}

export default BarPlayerBlock;
