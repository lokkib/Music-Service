import { useContext } from 'react';
import { setAuthorTrack } from '../../../../../../../../../redux/playTrack/playTrackSlice';
import ThemeContext, { themes } from '../../../../../../../../../themes';
import { TrackPlayContainIcon } from './TrackTitleComponents/TrackPlayContainIcon';
import { TrackTitleBlock } from './TrackTitleComponents/TrackTitleBlock';
import { TrackTitleImage } from './TrackTitleComponents/TrackTitleImage';
import { TrackTitleLink } from './TrackTitleComponents/TrackTitleLink';
import { TrackTitleSpan } from './TrackTitleComponents/TrackTitleSpan';

import { useDispatch } from 'react-redux';
import { setPlay } from '../../../../../../../../../redux/playTrack/playTrackSlice';

function TrackTitle({ name, src, author, album }) {
    const { themeMode } = useContext(ThemeContext);
    const { setVisibility } = useContext(ThemeContext);

    const dispatch = useDispatch();

    const playTrack = () => {
        setVisibility(themes.barVisibility.visible);
        dispatch(setPlay([true, src]));
        dispatch(setAuthorTrack([album, author]))
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
