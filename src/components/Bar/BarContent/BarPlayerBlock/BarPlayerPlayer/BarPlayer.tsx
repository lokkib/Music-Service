import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playingNextTrack } from '../../../../../redux/slices/orderOfPlayingSlice';
import {
    setPlay,
    setPlay2,
    setDataOfTrack,
    setSrcOfTrack,
} from '../../../../../redux/slices/playTrackSlice';
import { setProgressLine2 } from '../../../../../redux/slices/progressPlayerSlice';
import { setPlayingRenderedTracks } from '../../../../../redux/slices/storingAllTracksSlice';
import PlayerControls from './PlayerControls/PlayerControls';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayer } from './StyledBarPlayer';
import { RootState } from '../../../../../redux/store';

const BarPlayer = () => {
    const dispatch = useDispatch();
    const refPlayer = useRef(null);
    const volume = useSelector((state: RootState) => state.volume.volume);
    const [duration, setDuration] = useState(0);
    const [currentTime, ,] = useState(0);
    const [isPlaying, setisPlaying] = useState(false);
    const playingStatus = useSelector(
        (state: RootState) => state.playing.isPlaying
    );
    const playingStatus2 = useSelector(
        (state: RootState) => state.playing.isPlaying2
    );
    const numberOfTrackPlaying = useSelector(
        (state: RootState) => state.storeTracks.trackIsPlayed
    );
    const renderedTracks = useSelector(
        (state: RootState) => state.storeTracks.renderedTracks
    );
    const repeatedTrack = (state: RootState) =>
        state.orderOfTracksPlaying.repeatTracks.isButtonPressed;
    useEffect(() => {
        if (refPlayer.current) {
            refPlayer.current.volume = volume / 100;
        }
    });

    useEffect(() => {
        if (repeatedTrack) {
            refPlayer.current.loop = true;
        } else {
            refPlayer.current.loop = false;

            if (numberOfTrackPlaying + 1 > renderedTracks.length - 1) {
                dispatch(setPlayingRenderedTracks(numberOfTrackPlaying));
                const track = renderedTracks.filter(
                    (element, index) => index === numberOfTrackPlaying
                );
                dispatch(playingNextTrack(track));
                dispatch(setPlay(true));
                dispatch(setSrcOfTrack(track[0].track_file));
                dispatch(
                    setDataOfTrack([track[0].album, track[0].author, track.id])
                );
            } else {
                dispatch(setPlayingRenderedTracks(numberOfTrackPlaying + 1));
                const track = renderedTracks.filter(
                    (element, index) => index === numberOfTrackPlaying + 1
                );
                dispatch(playingNextTrack(track));
                dispatch(setPlay(true));
                dispatch(setSrcOfTrack(track[0].track_file));
                dispatch(setPlay2(true));
                dispatch(
                    setDataOfTrack([track[0].album, track[0].author, track.id])
                );
            }
        }
    });

    useEffect(() => {
        setDuration(refPlayer.current.duration.toFixed(1));

        // if (isNaN(duration) || !duration) {

        // } else {
        //     setDuration(refPlayer.current.duration.toFixed(1));
        // }
    });

    useEffect(() => {
        let timer;
        if (playingStatus && playingStatus2) {
            timer = setInterval(() => {
                dispatch(
                    setProgressLine2(refPlayer.current.currentTime.toFixed(0))
                );
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [playingStatus, playingStatus2]);

    return (
        <StyledBarPlayer>
            <Audio ref={refPlayer} />
            <PlayerControls
                setisPlaying={setisPlaying}
                isPlaying={isPlaying}
                refPlayer={refPlayer}
                duration={duration}
                currentTime={currentTime}
            />
            <PlayerTrackPlay />
        </StyledBarPlayer>
    );
};

export default BarPlayer;
