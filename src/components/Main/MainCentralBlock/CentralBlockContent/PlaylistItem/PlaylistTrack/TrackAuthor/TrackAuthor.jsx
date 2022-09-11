
import { useState, useEffect } from 'react';
import * as S from './StyledTrackAuthor';

function TrackAuthor() {
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
            <S.TrackAuthorLink>{img || '#'}</S.TrackAuthorLink>
            {/* <a className="track__author-link" href={link}>
              
            </a> */}
        </S.TrackAuthor>
        // <div className="track__author">

        // </div>
    );
}

export default TrackAuthor;
