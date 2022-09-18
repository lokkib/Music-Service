import * as S from './StyledPlayerControls';
import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';

function PlayerControls() {
    return (
        <S.PlayerControls>
            <S.PlayerBtnPrev>
                <Styled.PlayerControlIconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
                <Styled.PlayerControlIconPlay alt="play" />
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
