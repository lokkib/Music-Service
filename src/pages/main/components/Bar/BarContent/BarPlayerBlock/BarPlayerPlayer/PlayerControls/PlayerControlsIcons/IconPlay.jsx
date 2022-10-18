import { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../../../../../../../themes';

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
export function IconPlay({ alt }) {
    const { themeMode } = useContext(ThemeContext);
    return (
        <SvgPlayStop alt={alt}>
            <path
                style={themeMode.trackIconsFill}
                d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
                fill="#D9D9D9"
            />
        </SvgPlayStop>
    );
}
