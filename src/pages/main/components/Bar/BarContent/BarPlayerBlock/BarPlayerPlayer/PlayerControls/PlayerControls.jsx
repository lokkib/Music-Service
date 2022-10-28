import { PlayerBtnNext } from './PlayerControlsButtons/PlayerBtnNext';
import { PlayerBtnPlay } from './PlayerControlsButtons/PlayerBtnPlay';
import { PlayerBtnPrev } from './PlayerControlsButtons/PlayerBtnPrev';
import { PlayerBtnRepeat } from './PlayerControlsButtons/PlayerBtnRepeat';
import { PlayerBtnShuffle } from './PlayerControlsButtons/PlayerBtnShuffle';
import { PlayerControlsContainer } from './PlayerControlsButtons/PlayerControlsContainer';
import { IconNext } from './PlayerControlsIcons/IconNext';
import { IconPlay } from './PlayerControlsIcons/IconPlay';
import { IconPrev } from './PlayerControlsIcons/IconPrev';
import { IconRepeat } from './PlayerControlsIcons/IconRepeat';
import { IconShuffle } from './PlayerControlsIcons/IconShuffle';
import { IconStop } from './PlayerControlsIcons/IconStop';
import { useSelector } from 'react-redux';

function PlayerControls({ refPlayer, setisPlaying, isPlaying }) {
    
    const playingPlayer = useSelector(state => state.playing.isPlaying)
    console.log(playingPlayer)

    function changeIsPlaying(isPlaying) {
        setisPlaying(!isPlaying);
        if (isPlaying) {
            refPlayer.current.pause();
         } 
        else if (playingPlayer === true) {
            refPlayer.current.play();
        } else {
            refPlayer.current.play();
        }
    }

    return (
        <PlayerControlsContainer>
            <PlayerBtnPrev>
                <IconPrev alt="prev" />
            </PlayerBtnPrev>
            <PlayerBtnPlay
                onClick={() => {
                    changeIsPlaying(isPlaying);
                }}
            >
                {isPlaying ? <IconStop alt="stop" /> : <IconPlay alt="play" />}
            </PlayerBtnPlay>
            <PlayerBtnNext>
                <IconNext alt="next" />
            </PlayerBtnNext>

            <PlayerBtnRepeat>
                <IconRepeat alt="repeat" />
            </PlayerBtnRepeat>

            <PlayerBtnShuffle>
                <IconShuffle alt="shuffle" />
            </PlayerBtnShuffle>
        </PlayerControlsContainer>
    );
}

export default PlayerControls;
