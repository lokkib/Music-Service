import styled from 'styled-components';

const SvgPlayList = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    alt: 'time',
    fill: 'none',
    viewBox: '0 0 12 12',
    width: '12px',
    height: '12px',
})`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
    text-align: end;
`;

export const StyledPlaylistIcon = () => (
    <SvgPlayList>
        <circle cx="6" cy="6" r="5.5" stroke="#696969" />
        <path d="M4 6H6.5V2.5" stroke="#696969" />
    </SvgPlayList>
);
