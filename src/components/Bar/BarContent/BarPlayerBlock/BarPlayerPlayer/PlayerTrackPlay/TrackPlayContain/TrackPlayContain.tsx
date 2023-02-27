import { useContext } from 'react';
import { useSelector } from 'react-redux';

import ThemeContext from '../../../../../../../themes';
import { TrackPlayAlbum } from './TrackPlayContainComponents/TrackPlayAlbum';
import { TrackPlayAlbumLink } from './TrackPlayContainComponents/TrackPlayAlbumLink';
import { TrackPlayAuthor } from './TrackPlayContainComponents/TrackPlayAuthor';
import { TrackPlayAuthorLink } from './TrackPlayContainComponents/TrackPlayAuthorLink';
import { TrackPlayContainBlock } from './TrackPlayContainComponents/TrackPlayContainBlock';
import { TrackPlayContainIcon } from './TrackPlayContainComponents/TrackPlayContainIcon';
import { TrackPlayImage } from './TrackPlayContainComponents/TrackPlayImage';
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
