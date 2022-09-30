import * as S from './StyledPlayerControls';
import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';
import { useState } from 'react';
import { useEffect } from 'react';
import Duration from './PlayerControlsIcons/Duration';

function PlayerControls({ refAudio, duration, currentTime }) {
    const [icon, setIcons] = useState(false);

    let elem;

    function playMusic(duration, currentTime) {
        setIcons(!icon);
        if (icon) {
            refAudio.current.pause();
        } else {
            refAudio.current.play();
        }
        return duration, currentTime;
    }

    useEffect(() => {
        duration = refAudio.current.duration.toFixed(1);

        if (isNaN(duration)) {
            duration = false;
        } else {
            duration = refAudio.current.duration.toFixed(1);
            console.log(duration);
        }

        if (currentTime !== 0) {
            currentTime = refAudio.current.currentTime.toFixed(0);
            console.log(currentTime);
        } else {
            currentTime = false;
        }
    });

    if (icon) {
        elem = <Styled.PlayerControlIconStop alt="stop" />;
    }

    return (
        <S.PlayerControls style={{ alignItems: 'center' }}>
            <S.PlayerBtnPrev>
                <Styled.PlayerControlIconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay onClick={() => playMusic(duration, currentTime)}>
                {elem || <Styled.PlayerControlIconPlay alt="play" />}
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
                <Styled.PlayerControlIconNext alt="next" />
            </S.PlayerBtnNext>

            <S.PlayerBtnRepeat>
                <Styled.PlayerControlIconRepeat alt="repeat" />
            </S.PlayerBtnRepeat>

            <S.PlayerBtnShuffle>
                <Styled.PlayerControlIconShuffle alt="shuffle" />
            </S.PlayerBtnShuffle>
            <Duration
            // duration={
            //     duration || false
            // }
            // currentTime={
            //    currentTime  || false
            // }
            />
        </S.PlayerControls>
    );
}

export default PlayerControls;
