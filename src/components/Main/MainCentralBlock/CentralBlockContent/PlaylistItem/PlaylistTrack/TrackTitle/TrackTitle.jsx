import './TrackTitle.scss';
import TrackPlayContainIcon from '../../../../../../Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayContain/TrackPLayContainIcon';
import { useEffect, useState } from 'react';

function TrackTitle(link = 'http://') {
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
        <div className="track__title">
            <div className="track__title-image">
                {img || (
                    <TrackPlayContainIcon
                        className="track__title-svg"
                        alt="music"
                    />
                )}
            </div>
            <div className="track__title-text">
                <a className="track__title-link" href={link}>
                    {img2 || '#'}
                    <span className="track__title-span"></span>
                </a>
            </div>
        </div>
    );
}

export default TrackTitle;
