import { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../../../../../../../themes';

const SvgPrev = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '15px',
    height: '14px',
    fill: 'none',
    viewBox: '0 0 16 14',
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

export function IconPrev({ alt }) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <SvgPrev alt={alt}>
            <path
                style={themeMode.trackIconsStroke}
                d="M1 2V12.5"
                stroke="white"
            />
            <path
                style={themeMode.trackIconsFill}
                d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z"
                fill="#D9D9D9"
            />
        </SvgPrev>
    );
}
