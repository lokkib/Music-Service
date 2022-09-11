
import { useEffect, useState } from 'react';
import * as S from './StyledTrackAlbum'

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
        <S.TrackAlbum>

<S.TrackAlbumLink>
{img || '#'}
</S.TrackAlbumLink>
{/* <a className="track__album-link" href={link}>
                
            </a> */}

        </S.TrackAlbum>
        // <div className="track__album">
            
        // </div>
    );
}

export default TrackAlbum;
