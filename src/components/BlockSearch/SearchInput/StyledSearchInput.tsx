import styled from 'styled-components';
import { StyledSearchInputProps } from '../../../@types/props/StyledSearchInputProps';

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    &::placeholder {
        background-color: transparent;
        color: ${(props) => props.placeholderColor};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;
