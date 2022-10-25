import ProgressLine from '../BarPlayerBlock/BarPlayerPlayer/ProgressLine';
import { StyledBarPlayerProgress } from './StyledBarPlayerProgress';

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
