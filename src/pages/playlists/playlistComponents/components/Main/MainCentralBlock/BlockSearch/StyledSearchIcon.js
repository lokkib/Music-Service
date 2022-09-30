import styled from 'styled-components';
import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
})``;

const Svg = styled(Icon)`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`;

export function StyledSearchIcon () {
    const {theme2} = useContext(ThemeContext);

return <Svg  fill="none" viewBox="0 0 17 18">
        <path style={theme2}
            d="M11.9276 12.7748L15.37 17.0644"
            stroke="white"
            strokeLinecap="round"
        />
        <circle style={theme2}
            cx="8.48533"
            cy="8.48526"
            r="5.5"
            transform="rotate(-38.7469 8.48533 8.48526)"
            stroke="white"
        />
    </Svg>
}
    ;
