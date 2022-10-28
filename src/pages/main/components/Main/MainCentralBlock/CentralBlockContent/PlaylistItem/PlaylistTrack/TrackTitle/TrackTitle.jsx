
import { useContext } from 'react';

import ThemeContext, {themes} from '../../../../../../../../../themes';
import { TrackPlayContainIcon } from './TrackTitleComponents/TrackPlayContainIcon';
import { TrackTitleBlock } from './TrackTitleComponents/TrackTitleBlock';
import { TrackTitleImage } from './TrackTitleComponents/TrackTitleImage';
import { TrackTitleLink } from './TrackTitleComponents/TrackTitleLink';
import { TrackTitleSpan } from './TrackTitleComponents/TrackTitleSpan';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPlay } from '../../../../../../../../../redux/playTrack/playTrackSlice';
// import { useState } from 'react';
// import { useEffect } from 'react';

function TrackTitle({name, src}) {
    const { themeMode } = useContext(ThemeContext);
    const {setVisibility} = useContext(ThemeContext);
    // const [imgSkeleton, setImgSkeleton] = useState(false)
    // const [imgSkeleton2, setImgSkeleton2] = useState(false)
    
    const dispatch = useDispatch()

    // const playing = useSelector(state => state.playing)
    // const state = useSelector(state => state)
    // const skeleton = useSelector(state => state.skeleton.skeleton.skeletonTime)

    // console.log(skeleton)
    // console.log(imgSkeleton)
    // useEffect(() => {
    //     if(skeleton) {
    //         console.log('есть')
    //         setImgSkeleton(<img src="../img/Skeleton-track.png"></img>)
    //         setImgSkeleton2(<img src="../img/Skeleton-track-title.png"></img>)
    //     }
    //     else {
    //         console.log('нет')
    //     }
    // },[skeleton])

    const playTrack = () => {
        setVisibility(themes.barVisibility.visible)
        dispatch(setPlay([true, src]))
    }

   



    return (
        <TrackTitleBlock>
            <TrackTitleImage style={themeMode.trackTitle}>
                {  <TrackPlayContainIcon />}
            </TrackTitleImage>

            <div className="track__title-text">
                <TrackTitleLink onClick={() => {playTrack()}} style={themeMode.main}>
                    {name}
                    <TrackTitleSpan />
                </TrackTitleLink>
            </div>
        </TrackTitleBlock>
    );
}

export default TrackTitle;
