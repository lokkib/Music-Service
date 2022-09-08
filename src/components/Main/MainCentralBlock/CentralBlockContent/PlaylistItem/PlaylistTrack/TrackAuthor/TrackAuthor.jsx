import './TrackAuthor.scss';
import { useState, useEffect } from 'react';

function TrackAuthor({ link = 'http://' }) {
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
        <div className="track__author">
            <a className="track__author-link" href={link}>
                {img || '#'}
            </a>
        </div>
    );
}

export default TrackAuthor;
