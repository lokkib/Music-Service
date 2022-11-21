import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { playingNextTrack } from '../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import {
    setPlay,
    setPlay2,
} from '../../../../../../../redux/playTrack/playTrackSlice';
import { setDataOfTrack } from '../../../../../../../redux/playTrack/playTrackSlice';
import { setSrcOfTrack } from '../../../../../../../redux/playTrack/playTrackSlice';
import { setProgressLine2 } from '../../../../../../../redux/SettingProgressPlayer/progressPlayerSlice';
import { setPlayingRenderedTracks } from '../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import PlayerControls from './PlayerControls/PlayerControls';
import Audio from './PlayerControls/PlayerControlsIcons/Audio';
import PlayerTrackPlay from './PlayerTrackPlay/PlayerTrackPlay';
import { StyledBarPlayer } from './StyledBarPlayer';
function BarPlayer() {
    const dispatch = useDispatch();
    const refPlayer = useRef(null);
    const volume = useSelector((state) => state.volume.volume);
    const [duration, setDuration] = useState(0);
    const [currentTime, ,] = useState(0);
    const [isPlaying, setisPlaying] = useState(false);
    const playingStatus = useSelector((state) => state.playing.isPlaying);
    const playingStatus2 = useSelector((state) => state.playing.isPlaying2);
    const numberOfTrackPlaying = useSelector(
        (state) => state.storeTracks.trackIsPlayed.trackIsPlayed
    );
    const renderedTracks = useSelector(
        (state) => state.storeTracks.renderedTracks
    );
    const repeatedTrack = (state) =>
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
                const track = renderedTracks.filter((element, index) => {
                    return index === numberOfTrackPlaying;
                });
                dispatch(playingNextTrack(track));
                dispatch(setPlay(true));
                dispatch(setSrcOfTrack(track[0].track_file));
                dispatch(
                    setDataOfTrack([track[0].album, track[0].author, track.id])
                );
            } else {
                dispatch(setPlayingRenderedTracks(numberOfTrackPlaying + 1));
                const track = renderedTracks.filter((element, index) => {
                    return index === numberOfTrackPlaying + 1;
                });
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

        if (isNaN(duration) || !duration) {
            return;
        } else {
            setDuration(refPlayer.current.duration.toFixed(1));
        }
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
}

export default BarPlayer;
