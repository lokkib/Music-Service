import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ThemeContext from '../../../../../../../../../themes';
import { TrackPlayAlbum } from './TrackPlayContainComponents/TrackPlayAlbum';
import { TrackPlayAlbumLink } from './TrackPlayContainComponents/TrackPlayAlbumLink';
import { TrackPlayAuthor } from './TrackPlayContainComponents/TrackPlayAuthor';
import { TrackPlayAuthorLink } from './TrackPlayContainComponents/TrackPlayAuthorLink';
import { TrackPlayContainBlock } from './TrackPlayContainComponents/TrackPlayContainBlock';
import { TrackPlayContainIcon } from './TrackPlayContainComponents/TrackPlayContainIcon';
import { TrackPlayImage } from './TrackPlayContainComponents/TrackPlayImage';

function TrackPlayContain() {
    const { themeMode } = useContext(ThemeContext);

    const authorTrackName = useSelector(state => state.playing.authorTrackName)



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
                    {!authorTrackName.author? '' : authorTrackName.author}
                </TrackPlayAuthorLink>
            </TrackPlayAuthor>
            <TrackPlayAlbum>
                <TrackPlayAlbumLink style={themeMode.main}>
                {!authorTrackName.album? '' : authorTrackName.album}
                </TrackPlayAlbumLink>
            </TrackPlayAlbum>
        </TrackPlayContainBlock>
    );
}

export default TrackPlayContain;
