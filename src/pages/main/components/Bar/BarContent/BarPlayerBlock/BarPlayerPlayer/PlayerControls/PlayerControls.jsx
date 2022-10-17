import * as S from './StyledPlayerControls';
import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';

function PlayerControls({ refPlayer, setisPlaying, isPlaying }) {
    function changeIsPlaying(isPlaying) {
        setisPlaying(!isPlaying);
        if (isPlaying) {
            refPlayer.current.pause();
        } else {
            refPlayer.current.play();
        }
    }

    return (
        <S.PlayerControls style={{ alignItems: 'center' }}>
            <S.PlayerBtnPrev>
                <Styled.IconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay
                onClick={() => {
                    changeIsPlaying(isPlaying);
                }}
            >
                {isPlaying ? (
                    <Styled.IconStop alt="stop" />
                ) : (
                    <Styled.IconPlay alt="play" />
                )}
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
                <Styled.IconNext alt="next" />
            </S.PlayerBtnNext>

            <S.PlayerBtnRepeat>
                <Styled.IconRepeat alt="repeat" />
            </S.PlayerBtnRepeat>

            <S.PlayerBtnShuffle>
                <Styled.IconShuffle alt="shuffle" />
            </S.PlayerBtnShuffle>
        </S.PlayerControls>
    );
}

export default PlayerControls;
