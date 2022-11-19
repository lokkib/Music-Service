import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { playingNextTrack } from '../../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { playingPreviousTrack } from '../../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { shuffleTracks } from '../../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { repeatTrack } from '../../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
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
    const [shuffledButton, setShuffledButton] = useState(false);
    const [repeatButton, setRepeatButton] = useState(false);
    const dispatch = useDispatch();
    function changeIsPlaying(isPlaying) {
        setisPlaying(!isPlaying);
        if (isPlaying) {
            refPlayer.current.pause();
        } else {
            refPlayer.current.play();
        }
    }

    function playNextTrack() {
        dispatch(playingNextTrack(true));
    }

    function playPreviousTrack() {
        dispatch(playingPreviousTrack(true));
    }

    function shuffle() {
        setShuffledButton(!shuffledButton);
        dispatch(shuffleTracks(!shuffledButton));
    }

    function repeat() {
        setRepeatButton(!repeatButton);
        dispatch(repeatTrack(!repeatButton));
    }

    return (
        <PlayerControlsContainer>
            <PlayerBtnPrev onClick={playNextTrack}>
                <IconPrev alt="prev" />
            </PlayerBtnPrev>
            <PlayerBtnPlay
                onClick={() => {
                    changeIsPlaying(isPlaying);
                }}
            >
                {isPlaying ? <IconStop alt="stop" /> : <IconPlay alt="play" />}
            </PlayerBtnPlay>
            <PlayerBtnNext onClick={playPreviousTrack}>
                <IconNext alt="next" />
            </PlayerBtnNext>

            <PlayerBtnRepeat onClick={repeat}>
                <IconRepeat alt="repeat" />
            </PlayerBtnRepeat>

            <PlayerBtnShuffle onClick={shuffle}>
                <IconShuffle alt="shuffle" />
            </PlayerBtnShuffle>
        </PlayerControlsContainer>
    );
}

export default PlayerControls;
