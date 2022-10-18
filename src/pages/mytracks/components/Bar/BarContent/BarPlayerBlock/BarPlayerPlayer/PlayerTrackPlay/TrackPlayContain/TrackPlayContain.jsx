import { useEffect, useState } from 'react';

import * as S from './StyledTrackPlayContain';
import TrackPlayContainIcon from './TrackPLayContainIcon';

function TrackPlayContain() {
    const skeletons = {
        SkeletonTrack: '../img/Skeleton-track.png',
        SkeletonDescription: '../img/Skeleton-description-track.png',
    };

    const [img, setImg] = useState(
        <img src={`${skeletons.SkeletonTrack}`}></img>
    );

    const [img2, setImg2] = useState(
        <img src={`${skeletons.SkeletonDescription}`}></img>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImg(false);
            setImg2(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <S.TrackPlayContain>
            <S.TrackPlayImage>
                {img || (
                    <TrackPlayContainIcon
                        className="track-play__svg"
                        alt="music"
                    />
                )}
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
                <S.TrackPlayAuthorLink>{img2 || '#'}</S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
                <S.TrackPlayAlbumLink>{img2 || '#'}</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
        </S.TrackPlayContain>
    );
}

export default TrackPlayContain;
