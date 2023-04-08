import styled from 'styled-components';

import { ButtonSignIn, Button } from './ButtonSignIn';

export const ButtonSignUp = styled(Button)`
    position: absolute;
    top: 330px;
    background-color: white;
    color: black;
    &:hover {
        background-color: #d0cece;
    }
    &:active {
        background-color: #d9d9d9;
    }
`;

export const SecondButtonSignUp = styled(ButtonSignIn)`
    position: absolute;
    top: 440px;
`;
