import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../../../themes';

const Icon = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
})``;

const Svg = styled(Icon)`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
    &: hover {
        stroke: #acacac;
        cursor: pointer;
    }
`;

export function PlayIconLike ({ alt }) {
    const {theme10} = useContext(ThemeContext);
   return <Svg alt={alt} fill="none" viewBox="0 0 16 15">
        <path style={theme10}
            d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
            stroke="#696969"
        />
    </Svg>
};

const Svg2 = styled(Svg)`
    width: 14.34px;
    height: 13px;
`;

export function PlayIconDislike  ({ alt }) {
    const {theme10} = useContext(ThemeContext);
  return  <Svg2 alt={alt} fill="none" viewBox="0 0 16 15">
        <path style={theme10} d="M1 1L15 13.5" stroke="#696969" />
        <path style={theme10}
            d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
            stroke="#696969"
        />
    </Svg2>
};
