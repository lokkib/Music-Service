import styled from 'styled-components';

export const VolumeProgressLine = styled.input.attrs({
    type: 'range',
    name: 'range',
    min: 0,
    max: 100,
})`
    -webkit-appearance: none;
    appearance: none;
    height: 0px;
    border: ${(props) =>
        props.theme === true ? '2px solid #797979' : '2px solid #C4C4C4'};
    width: 109px;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 12px;
        height: 12px;
        cursor: pointer;
        background: ${(props) =>
            props.theme === true ? '#1a1a1a' : '#ffffff'};
        border: ${(props) =>
            props.theme === true ? '2px solid #ffffff' : '2px solid #B1B1B1'};
        border-radius: 50%;
    }
`;
