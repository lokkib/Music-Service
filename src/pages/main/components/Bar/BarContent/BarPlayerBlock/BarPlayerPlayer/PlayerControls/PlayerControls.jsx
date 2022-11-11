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
import { useDispatch } from 'react-redux';
import { playingNextTrack } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { playingPreviousTrack } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { shuffleTracks } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { useState } from 'react';
import { repeatTrack } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
function PlayerControls({ refPlayer, setisPlaying, isPlaying }) {
    const [shuffledButton, setShuffledButton] = useState(false)
    const [repeatButton, setRepeatButton] = useState(false)

   
    const playingPlayer = useSelector((state) => state.playing.isPlaying);

    const dispatch = useDispatch()

    function changeIsPlaying(isPlaying) {
        setisPlaying(!isPlaying);
        if (isPlaying) {
            refPlayer.current.pause();
        } else if (playingPlayer === true) {
            refPlayer.current.play();
        } else {
            refPlayer.current.play();
        }
    }

    function playNextTrack() {
        dispatch(playingNextTrack(true))
    }

    function playPreviousTrack() {
        dispatch(playingPreviousTrack(true))
    }

    function shuffle() {
        setShuffledButton(!shuffledButton)
        dispatch(shuffleTracks(!shuffledButton))
    }

    function repeat() {
        setRepeatButton(!repeatButton)
        dispatch(repeatTrack(!repeatButton))
    }

    return (
        <PlayerControlsContainer>
            <PlayerBtnPrev onClick={playPreviousTrack}>
                <IconPrev alt="prev" />
            </PlayerBtnPrev>
            <PlayerBtnPlay
                onClick={() => {
                    changeIsPlaying(isPlaying);
                }}
            >
                {isPlaying ? <IconStop alt="stop" /> : <IconPlay alt="play" />}
            </PlayerBtnPlay>
            <PlayerBtnNext onClick={playNextTrack}>
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
