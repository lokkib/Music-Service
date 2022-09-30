import { StyledBarPlayerProgress } from './StyledBarPlayerProgress';
import Duration from '../BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/Duration';

import ThemeContext from '../../../../../../themes';
import { useContext } from 'react';

function BarPlayerProgress() {
  

    const {theme3} = useContext(ThemeContext);


    return (
        <>
        
        <StyledBarPlayerProgress style={theme3}>
                <Duration
                    currentTime={sessionStorage.getItem('currentTime')}
                    duration={sessionStorage.getItem('duration') || false}
                />
            </StyledBarPlayerProgress>

           
        </>
    );
}

export default BarPlayerProgress;
