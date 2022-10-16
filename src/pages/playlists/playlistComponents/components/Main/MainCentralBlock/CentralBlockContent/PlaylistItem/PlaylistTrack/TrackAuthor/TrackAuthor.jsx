import { useState, useEffect } from 'react';
import * as S from './StyledTrackAuthor';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../../../themes';

function TrackAuthor() {
    const { themeMode } = useContext(ThemeContext);
    const [img, setImg] = useState(
        <img src="../img/Skeleton-track-author.png"></img>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImg(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <S.TrackAuthor>
            <S.TrackAuthorLink style={themeMode.main}>
                {img || '#'}
            </S.TrackAuthorLink>
        </S.TrackAuthor>
    );
}

export default TrackAuthor;
