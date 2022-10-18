import styled from 'styled-components';

const SvgPlayStop = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 15 20',
    width: '22px',
    height: '20px',
})`
    &:active {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
    &:hover {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`;

export const IconStop = ({ alt }) => (
    <SvgPlayStop alt={alt}>
        <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" />
    </SvgPlayStop>
);
