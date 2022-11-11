import styled from 'styled-components';

export const VolumeProgressLine = styled.input.attrs({
    type: 'range',
    name: 'range',
    min: 0,
    max: 100,
})`
    width: 109px;
`;
