import { useEffect, useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../../../../themes';
import { TrackPlayContainIcon } from './TrackTitleComponents/TrackPlayContainIcon';
import { TrackTitleBlock } from './TrackTitleComponents/TrackTitleBlock';
import { TrackTitleImage } from './TrackTitleComponents/TrackTitleImage';
import { TrackTitleLink } from './TrackTitleComponents/TrackTitleLink';
import { TrackTitleSpan } from './TrackTitleComponents/TrackTitleSpan';

function TrackTitle() {
    const { themeMode } = useContext(ThemeContext);
    const [img, setImg] = useState(<img src="../img/Skeleton-track.png"></img>);

    const [img2, setImg2] = useState(
        <img src="../img/Skeleton-track-title.png"></img>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImg(false);
            setImg2(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <TrackTitleBlock>
            <TrackTitleImage style={themeMode.trackTitle}>
                {img || <TrackPlayContainIcon />}
            </TrackTitleImage>

            <div className="track__title-text">
                <TrackTitleLink style={themeMode.main}>
                    {img2 || '#'}
                    <TrackTitleSpan />
                </TrackTitleLink>
            </div>
        </TrackTitleBlock>
    );
}

export default TrackTitle;
