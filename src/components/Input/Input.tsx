import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
    name: props.name,
}))`
    margin-top: 42px;
    background-color: transparent;
    outline: none;
    color: black;
    font-weight: 400;
    font-size: 18px;
    border-top: none;
    border-right: none;
    border-left: none;
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }
`;
