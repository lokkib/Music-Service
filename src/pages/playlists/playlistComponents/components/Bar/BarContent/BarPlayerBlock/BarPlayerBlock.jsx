import BarVolume from '../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarVolumeBlock/BarVolume';
import BarPlayerPlayer from './BarPlayerPlayer/BarPlayerPlayer';
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
