import styled from 'styled-components';

export const TrackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`;

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`;

export const TrackTitleLink = styled.a.attrs({
    href: 'http://',
})`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
})``;

const Svg = styled(Icon)`
    width: 20px;
    height: 19px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackPlayContainIcon = () => (
    <Svg fill="none" viewBox="0 0 20 19">
        <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
        <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
        <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
    </Svg>
);

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;
