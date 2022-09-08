import './TrackAlbum.scss';
import { useEffect, useState } from 'react';

function TrackAlbum({ link = 'http://' }) {
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
        <div className="track__album">
            <a className="track__album-link" href={link}>
                {img || '#'}
            </a>
        </div>
    );
}

export default TrackAlbum;
