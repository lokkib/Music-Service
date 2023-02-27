import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProgressLine2 } from '../../../../../redux/slices/progressPlayerSlice';

import PlayerControls from './PlayerControls/PlayerControls';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayer } from './StyledBarPlayer';
import { RootState } from '../../../../../redux/store';

const BarPlayer = () => {
    const dispatch = useDispatch();
    const refPlayer = useRef<HTMLAudioElement>(null);
    const volume = useSelector((state: RootState) => state.volume.volume);
    const [, setDuration] = useState('0');
    const playingStatus = useSelector(
        (state: RootState) => state.playing.isPlaying
    );
    const playingStatus2 = useSelector(
        (state: RootState) => state.playing.isPlaying2
    );

    useEffect(() => {
        if (refPlayer.current) {
            refPlayer.current.volume = volume / 100;
        }
    });

    useEffect(() => {
        if (refPlayer.current) {
            setDuration(refPlayer.current.duration.toFixed(1));
        }
    });

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (playingStatus && playingStatus2) {
            timer = setInterval(() => {
                if (refPlayer.current) {
                    dispatch(
                        setProgressLine2(
                            +refPlayer.current.currentTime.toFixed(0)
                        )
                    );
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [playingStatus, playingStatus2]);

    return (
        <StyledBarPlayer>
            <Audio ref={refPlayer} />
            <PlayerControls refPlayer={refPlayer} />
            <PlayerTrackPlay />
        </StyledBarPlayer>
    );
};

export default BarPlayer;
