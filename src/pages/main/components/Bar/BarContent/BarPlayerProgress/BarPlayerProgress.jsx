import { StyledBarPlayerProgress } from './StyledBarPlayerProgress';
import Duration from '../BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/Duration';

function BarPlayerProgress() {
    return (
        <>
            <StyledBarPlayerProgress>
                <Duration
                    currentTime={sessionStorage.getItem('currentTime')}
                    duration={sessionStorage.getItem('duration') || false}
                />
            </StyledBarPlayerProgress>
        </>
    );
}

export default BarPlayerProgress;
