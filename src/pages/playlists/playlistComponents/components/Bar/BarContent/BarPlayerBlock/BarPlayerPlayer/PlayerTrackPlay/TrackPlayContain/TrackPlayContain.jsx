import { useContext } from 'react';
import { useSelector } from 'react-redux';

import ThemeContext from '../../../../../../../../../../themes';
import { TrackPlayAlbum } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayAlbum';
import { TrackPlayAlbumLink } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayAlbumLink';
import { TrackPlayAuthor } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayAuthor';
import { TrackPlayAuthorLink } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayAuthorLink';
import { TrackPlayContainBlock } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayContainBlock';
import { TrackPlayImage } from '../../../../../../../../../main/components/Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPlayContainComponents/TrackPlayImage';
import { TrackPlayContainIcon } from '../../../../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistTrack/TrackTitle/TrackTitleComponents/TrackPlayContainIcon';

function TrackPlayContain() {
    const { themeMode } = useContext(ThemeContext);
    const authorTrackName = useSelector(
        (state) => state.playing.authorTrackName
    );

    return (
        <TrackPlayContainBlock>
            <TrackPlayImage style={themeMode.trackTitle}>
                {
                    <TrackPlayContainIcon
                        className="track-play__svg"
                        alt="music"
                    />
                }
            </TrackPlayImage>
            <TrackPlayAuthor>
                <TrackPlayAuthorLink style={themeMode.main}>
                    {!authorTrackName.author ? '' : authorTrackName.author}
                </TrackPlayAuthorLink>
            </TrackPlayAuthor>
            <TrackPlayAlbum>
                <TrackPlayAlbumLink style={themeMode.main}>
                    {!authorTrackName.album ? '' : authorTrackName.album}
                </TrackPlayAlbumLink>
            </TrackPlayAlbum>
        </TrackPlayContainBlock>
    );
}

export default TrackPlayContain;
