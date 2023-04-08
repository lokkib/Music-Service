import styled from 'styled-components';

export const StyledErrorMessage = styled.p<{ fontSize?: string }>`
    color: red;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
    margin-top: 10px;
    font-weight: 600;
`;
