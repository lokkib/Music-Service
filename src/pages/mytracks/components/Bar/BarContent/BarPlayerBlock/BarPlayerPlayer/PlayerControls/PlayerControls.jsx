import * as Styled from './PlayerControlsIcons/StyledPlayerControlIcons';
import * as S from './StyledPlayerControls';

function PlayerControls() {
    return (
        <S.PlayerControls>
            <S.PlayerBtnPrev>
                <Styled.IconPrev alt="prev" />
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
                <Styled.IconPlay alt="play" />
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
