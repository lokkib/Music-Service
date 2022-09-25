import * as S from './StyledPlayerControls';
import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';
import { useRef } from 'react';
import { useState } from 'react';
import Audio from './PlayerControlsIcons/Audio';
import { useEffect } from 'react';
import Duration from './PlayerControlsIcons/Duration';

function PlayerControls({ duration, currentTime }) {
    const [icon, setIcons] = useState(false);

    const refPlayer = useRef(null);

    function playMusic() {
        setIcons(!icon);
        if (icon) {
            refPlayer.current.pause();
        } else {
            refPlayer.current.play();
        }
    }

    let emptyTime;
    let elem;

    useEffect(() => {
        duration = refPlayer.current.duration;

        if (isNaN(duration)) {
            emptyTime = Boolean(sessionStorage.getItem('duration'));
        } else {
            sessionStorage.setItem('duration', `${(duration / 60).toFixed(1)}`);
        }

        if (currentTime !== 0) {
            currentTime = refPlayer.current.currentTime;

            sessionStorage.setItem('currentTime', `${currentTime.toFixed(0)}`);
        } else {
            emptyTime = Boolean(sessionStorage.getItem('currentTime'));
        }
    });

    if (icon) {
        elem = <Styled.PlayerControlIconStop alt="stop" />;
    }

    window.onunload = function () {
        sessionStorage.removeItem('currentTime');
    };

    return (
        <S.PlayerControls style={{ alignItems: 'center' }}>
            <Audio ref={refPlayer} />
            <S.PlayerBtnPrev>
                <Styled.PlayerControlIconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay onClick={playMusic}>
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
                duration={
                    emptyTime || sessionStorage.getItem('duration') || false
                }
                currentTime={
                    emptyTime || sessionStorage.getItem('currentTime') || false
                }
            />
        </S.PlayerControls>
    );
}

export default PlayerControls;
