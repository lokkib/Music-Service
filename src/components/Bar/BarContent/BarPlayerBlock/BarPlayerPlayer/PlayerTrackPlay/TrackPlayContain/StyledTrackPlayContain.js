import styled from 'styled-components';

export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`;

export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`;

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`;

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`;

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
});

const Svg = styled(Icon)`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;
export const StyledTrackPlayContainIcon = ({ alt }) => (
    <Svg alt={alt} fill="none" viewBox="0 0 20 19">
        <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
        <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
        <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
    </Svg>
);

export const TrackPlayAuthorLink = styled.a.attrs({
    href: 'http',
})`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`;

export const TrackPlayAlbumLink = styled.a.attrs({
    href: 'http',
})`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`;
