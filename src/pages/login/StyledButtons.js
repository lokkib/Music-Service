import styled from 'styled-components';

const Button = styled.button`
    width: 278px;
    height: 52px;
    border-radius: 6px;
`;

export const ButtonSignIn = styled(Button)`
    margin-top: 60px;
    margin-bottom: 20px;
    background-color: purple;
    color: white;
    &:hover {
        background-color: #301934;
    }
    &:active {
        background-color: #021691;
    }
`;

export const ButtonSignUp = styled(Button)`
    background-color: white;
    color: black;
    &:hover {
        background-color: #d0cece;
    }
    &:active {
        background-color: #d9d9d9;
    }
`;

export const SecondButtonSignUp = styled(ButtonSignIn)``;
