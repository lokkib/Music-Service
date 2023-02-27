import styled from 'styled-components';
import { SearchPerformerGenreItemProps } from '../../../../../../../@types/props/SearchPerformerItemProps';

export const SearchPerformerLabel = styled.label<SearchPerformerGenreItemProps>`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    color: ${(props) => props.active};
    cursor: pointer;
    &:hover {
        color: ${(props) => props.active};
        text-decoration-line: underline;
        cursor: pointer;
    }
    &:active {
        text-decoration-line: underline;
        cursor: pointer;
        color: #b672ff;
    }
`;
