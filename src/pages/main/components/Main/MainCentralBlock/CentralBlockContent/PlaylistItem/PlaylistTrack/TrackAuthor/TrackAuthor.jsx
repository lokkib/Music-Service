import { useEffect, useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../../../../themes';
import { TrackAuthorBlock } from './TrackAuthorComponents/TrackAuthorBlock';
import { TrackAuthorLink } from './TrackAuthorComponents/TrackAuthorLink';

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
        <TrackAuthorBlock>
            <TrackAuthorLink style={themeMode.main}>
                {img || '#'}
            </TrackAuthorLink>
        </TrackAuthorBlock>
    );
}

export default TrackAuthor;
