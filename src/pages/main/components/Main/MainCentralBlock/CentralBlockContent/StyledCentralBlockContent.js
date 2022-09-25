import styled from 'styled-components';

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const PlaylistTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

export const ContentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const PlaylistTitleTrack = styled(PlaylistTitle)`
    width: 447px;
`;

export const PlaylistTitleAuthor = styled(PlaylistTitle)`
    width: 321px;
`;

export const PlaylistTitleAlbum = styled(PlaylistTitle)`
    width: 245px;
`;
