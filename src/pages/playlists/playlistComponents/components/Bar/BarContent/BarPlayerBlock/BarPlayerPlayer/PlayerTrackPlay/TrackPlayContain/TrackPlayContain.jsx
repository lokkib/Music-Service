import { useEffect, useState } from 'react';
import { useContext } from 'react';

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

    const skeletons = {
        SkeletonTrack: '../img/Skeleton-track.png',
        SkeletonDescription: '../img/Skeleton-description-track.png',
    };

    const [img, setImg] = useState(
        <img src={`${skeletons.SkeletonTrack}`}></img>
    );

    const [img2, setImg2] = useState(
        <img src={`${skeletons.SkeletonDescription}`}></img>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImg(false);
            setImg2(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <TrackPlayContainBlock>
            <TrackPlayImage style={themeMode.trackTitle}>
                {img || (
                    <TrackPlayContainIcon
                        className="track-play__svg"
                        alt="music"
                    />
                )}
            </TrackPlayImage>
            <TrackPlayAuthor>
                <TrackPlayAuthorLink style={themeMode.main}>
                    {img2 || '#'}
                </TrackPlayAuthorLink>
            </TrackPlayAuthor>
            <TrackPlayAlbum>
                <TrackPlayAlbumLink style={themeMode.main}>
                    {img2 || '#'}
                </TrackPlayAlbumLink>
            </TrackPlayAlbum>
        </TrackPlayContainBlock>
    );
}

export default TrackPlayContain;
