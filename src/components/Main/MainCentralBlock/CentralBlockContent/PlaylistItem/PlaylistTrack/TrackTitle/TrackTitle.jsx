
import { useEffect, useState } from 'react';
import * as S from './StyledTrackTitle';

function TrackTitle() {
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
            <S.TrackTitleImage>
                {img || <S.TrackPlayContainIcon />}
            </S.TrackTitleImage>
            {/* <div className="track__title-image">
                
            </div> */}
            <div className="track__title-text">
                <S.TrackTitleLink>
                    {img2 || '#'}
                    <S.TrackTitleSpan/>
                    {/* <span className="track__title-span"></span> */}
                </S.TrackTitleLink>
                {/* <a className="track__title-link" href={link}>
                  
                    
                </a> */}
            </div>
        </S.TrackTitle>
        // <div className="track__title">

        // </div>
    );
}

export default TrackTitle;
