
import { StyledBarPlayerProgress } from './StyledBarPlayerProgress';
import ProgressLine from '../BarPlayerBlock/BarPlayerPlayer/ProgressLine';

function BarPlayerProgress({ duration, currentTime }) {
    return (
        <>
            <StyledBarPlayerProgress>
                <ProgressLine value={currentTime} max={duration} />
            </StyledBarPlayerProgress>
        </>
    );
}

export default BarPlayerProgress;