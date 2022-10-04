import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayer } from './StyledBarPlayer';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function BarPlayer({ getValues }) {
    const refPlayer = useRef(null);

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setisPlaying] = useState(false);

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
                refPlayer={refPlayer}
                duration={duration}
                currentTime={currentTime}
            />
            <PlayerTrackPlay />
        </StyledBarPlayer>
    );
}

export default BarPlayer;
