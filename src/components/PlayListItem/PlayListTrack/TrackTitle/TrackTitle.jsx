import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import {
    setDataOfTrack,
    setPlay,
    setPlay2,
    setSrcOfTrack,
    addTrackPlayed,
} from '../../../../redux/playTrack/playTrackSlice';
import { setProgressLine } from '../../../../redux/SettingProgressPlayer/progressPlayerSlice';
import { setPlayingRenderedTracks } from '../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext, { themes } from '../../../../themes';
import { TrackPlayContainIcon } from './components/TrackPlayContainIcon';
import { TrackTitleBlock } from './components/TrackTitleBlock';
import { TrackTitleImage } from './components/TrackTitleImage';
import { TrackTitleLink } from './components/TrackTitleLink';
import { TrackTitleSpan } from './components/TrackTitleSpan';

const TrackTitle = ({
    id,
    duration,
    index,
    name,
    src,
    author,
    album,
    track,
}) => {
    const { themeMode } = useContext(ThemeContext);
    const { setVisibility } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const playTrack = () => {
        setVisibility(themes.barVisibility.visible);
        dispatch(setPlay(true));
        dispatch(setPlay2(true));
        dispatch(addTrackPlayed(track));
        dispatch(setSrcOfTrack(src));
        dispatch(setDataOfTrack([album, author, id]));
        dispatch(setProgressLine(duration));
        dispatch(setPlayingRenderedTracks(index));
    };

    return (
        <TrackTitleBlock>
            <TrackTitleImage style={themeMode.trackTitle}>
                <TrackPlayContainIcon />
            </TrackTitleImage>

            <div className="track__title-text">
                <TrackTitleLink
                    onClick={() => {
                        playTrack();
                    }}
                    style={themeMode.main}
                >
                    {name}
                    <TrackTitleSpan />
                </TrackTitleLink>
            </div>
        </TrackTitleBlock>
    );
};

export default TrackTitle;
