import styled from 'styled-components';
import { SearchPerformerGenreItemProps } from '../../../../../../../@types/props/SearchPerformerItemProps';

const SearchPerformerItem = styled.div<SearchPerformerGenreItemProps>`
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.active};
    line-height: 24px;
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

export default SearchPerformerItem;
