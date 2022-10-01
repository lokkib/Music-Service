import * as S from './StyledPlayerControls';
import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';
import { useState } from 'react';

function PlayerControls({ refPlayer, setisPlaying }) {
    const [icon, setIcons] = useState(false);

    let elem;

    if (icon) {
        elem = <Styled.PlayerControlIconStop alt="stop" />;
    }

    function changeIsPlaying(icon) {
        if (icon) {
            refPlayer.current.pause();
            setisPlaying(true);
        } else {
            refPlayer.current.play();
            setisPlaying(false);
        }
    }

    return (
        <S.PlayerControls style={{ alignItems: 'center' }}>
            <S.PlayerBtnPrev>
                <Styled.PlayerControlIconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay
                onClick={() => {
                    setIcons(!icon);
                    changeIsPlaying(icon);
                }}
            >
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
        </S.PlayerControls>
    );
}

export default PlayerControls;
