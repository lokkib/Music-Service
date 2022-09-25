import styled from 'styled-components';

export const PlayerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

const PlayerBtn = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`;

export const PlayerBtnPrev = styled(PlayerBtn)`
    margin-right: 23px;
`;
export const PlayerBtnPlay = styled(PlayerBtn)`
    margin-right: 23px;
`;
export const PlayerBtnNext = styled(PlayerBtn)`
    margin-right: 28px;
    fill: #a53939;
`;
export const PlayerBtnRepeat = styled(PlayerBtn)`
    margin-right: 24px;
`;
export const PlayerBtnShuffle = styled(PlayerBtn)`
    display: flex;
    align-items: center;
`;
