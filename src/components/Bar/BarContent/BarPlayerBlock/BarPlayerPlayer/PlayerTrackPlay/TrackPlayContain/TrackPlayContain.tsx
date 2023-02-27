import { useContext } from 'react';
import { useSelector } from 'react-redux';

import ThemeContext from '../../../../../../../themes';
import { TrackPlayAlbum } from './TrackPlayComponents/TrackPlayAlbum';
import { TrackPlayAlbumLink } from './TrackPlayComponents/TrackPlayAlbumLink';
import { TrackPlayAuthor } from './TrackPlayComponents/TrackPlayAuthor';
import { TrackPlayAuthorLink } from './TrackPlayComponents/TrackPlayAuthorLink';
import { TrackPlayContainBlock } from './TrackPlayComponents/TrackPlayContainBlock';
import { TrackPlayContainIcon } from './TrackPlayComponents/TrackPlayContainIcon';
import { TrackPlayImage } from './TrackPlayComponents/TrackPlayImage';
import { RootState } from '../../../../../../../redux/store';

const TrackPlayContain = () => {
    const { themeMode } = useContext(ThemeContext);

    const trackData = useSelector(
        (state: RootState) => state.playing.dataOfTrack
    );

    return (
        <TrackPlayContainBlock>
            <TrackPlayImage style={themeMode.trackTitle}>
                <TrackPlayContainIcon />
            </TrackPlayImage>
            <TrackPlayAuthor>
                <TrackPlayAuthorLink style={themeMode.main}>
                    {!trackData.author ? '' : trackData.author}
                </TrackPlayAuthorLink>
            </TrackPlayAuthor>
            <TrackPlayAlbum>
                <TrackPlayAlbumLink style={themeMode.main}>
                    {!trackData.album ? '' : trackData.album}
                </TrackPlayAlbumLink>
            </TrackPlayAlbum>
        </TrackPlayContainBlock>
    );
};

export default TrackPlayContain;
