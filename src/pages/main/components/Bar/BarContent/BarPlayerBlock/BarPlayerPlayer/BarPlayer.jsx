import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PlayerControls from './PlayerControls/PlayerControls';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayer } from './StyledBarPlayer';

function BarPlayer({ getValues }) {
    const refPlayer = useRef(null);
    const volume = useSelector((state) => state.volume.volume);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setisPlaying] = useState(false);

    useEffect(() => {
        if (refPlayer.current) {
            refPlayer.current.volume = volume / 100;
        }
    });

    useEffect(() => {
        setDuration(refPlayer.current.duration.toFixed(1));

        if (isNaN(duration) || !duration) {
            return;
        } else {
            setDuration(refPlayer.current.duration.toFixed(1));
        }
    });

    useEffect(() => {
        setInterval(() => {
            if (currentTime !== 0 && !refPlayer.current.paused) {
                setCurrentTime(refPlayer.current.currentTime.toFixed(0));
            }

            if (!refPlayer.current) {
                setCurrentTime(0);
            } else {
                setCurrentTime(refPlayer.current.currentTime.toFixed(0));
            }
        }, 1000);
    }, []);

    useEffect(() => {
        getValues(duration, currentTime);
    });

    return (
        <StyledBarPlayer>
            <Audio ref={refPlayer} />
            <PlayerControls
                setCurrentTime={setCurrentTime}
                setisPlaying={setisPlaying}
                setDuration={setDuration}
                isPlaying={isPlaying}
                refPlayer={refPlayer}
                duration={duration}
                currentTime={currentTime}
            />
            <PlayerTrackPlay />
        </StyledBarPlayer>
    );
}

export default BarPlayer;
