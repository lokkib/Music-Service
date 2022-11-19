import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { setDataOfTrack } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import { setPlay } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import { setPlay2 } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import { setSrcOfTrack } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import { addTrackPlayed } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import { setProgressLine } from '../../../../../../../../../redux/SettingProgressPlayer/progressPlayerSlice';
import { setPlayingRenderedTracks } from '../../../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext, { themes } from '../../../../../../../../../themes';
import { TrackPlayContainIcon } from './TrackTitleComponents/TrackPlayContainIcon';
import { TrackTitleBlock } from './TrackTitleComponents/TrackTitleBlock';
import { TrackTitleImage } from './TrackTitleComponents/TrackTitleImage';
import { TrackTitleLink } from './TrackTitleComponents/TrackTitleLink';
import { TrackTitleSpan } from './TrackTitleComponents/TrackTitleSpan';
function TrackTitle({ id, duration, index, name, src, author, album, track }) {
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
                {<TrackPlayContainIcon />}
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
}

export default TrackTitle;
