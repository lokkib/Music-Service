import styled from 'styled-components';

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    alt: 'like',
})``;

const Svg = styled(Icon)`
    width: 16px;
    height: 14px;
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
`;

export const TrackTimeIcon = () => (
    <Svg fill="none" viewBox="0 0 16 14">
        <path
            d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
            stroke="#696969"
        />
    </Svg>
);

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
