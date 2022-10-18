import { useEffect, useState } from 'react';

import { TrackAlbumLink } from './TrackAlbumComponents/TrackAlbumLink';
import { TrackAlbumBlock } from './TrackAlbumComponents/TrackAuthorBlock';

function TrackAlbum() {
    const [img, setImg] = useState(
        <img src="../img/Skeleton-track-album.png"></img>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImg(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <TrackAlbumBlock>
            <TrackAlbumLink>{img || '#'}</TrackAlbumLink>
        </TrackAlbumBlock>
    );
}

export default TrackAlbum;
