import { PlayerBtnNext } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerBtnNext';
import { PlayerBtnPlay } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerBtnPlay';
import { PlayerBtnPrev } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerBtnPrev';
import { PlayerBtnRepeat } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerBtnRepeat';
import { PlayerBtnShuffle } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerBtnShuffle';
import { PlayerControlsContainer } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsButtons/PlayerControlsContainer';
import { IconNext } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconNext';
import { IconPlay } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconPlay';
import { IconPrev } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconPrev';
import { IconRepeat } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconRepeat';
import { IconShuffle } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconShuffle';
import { IconStop } from '../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerControls/PlayerControlsIcons/IconStop';

function PlayerControls({ refPlayer, setisPlaying, isPlaying }) {
    function changeIsPlaying(isPlaying) {
        setisPlaying(!isPlaying);
        if (isPlaying) {
            refPlayer.current.pause();
        } else {
            refPlayer.current.play();
        }
    }

    return (
        <PlayerControlsContainer style={{ alignItems: 'center' }}>
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
