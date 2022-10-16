import { useEffect, useState } from 'react';
import * as S from './StyledTrackTitle';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../../../themes';

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
        <S.TrackTitle>
            <S.TrackTitleImage style={themeMode.trackTitle}>
                {img || <S.TrackPlayContainIcon />}
            </S.TrackTitleImage>

            <div className="track__title-text">
                <S.TrackTitleLink style={themeMode.main}>
                    {img2 || '#'}
                    <S.TrackTitleSpan />
                </S.TrackTitleLink>
            </div>
        </S.TrackTitle>
    );
}

export default TrackTitle;
