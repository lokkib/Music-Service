import './TrackPlayContain.scss';
import TrackPlayContainIcon from './TrackPLayContainIcon';
import { useState, useEffect } from 'react';

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
        <div className="track-play__contain">
            <div className="track-play__image">
                {img || (
                    <TrackPlayContainIcon
                        className="track-play__svg"
                        alt="music"
                    />
                )}
            </div>
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                    {img2 || '#'}
                </a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                    {img2 || '#'}
                </a>
            </div>
        </div>
    );
}

export default TrackPlayContain;
