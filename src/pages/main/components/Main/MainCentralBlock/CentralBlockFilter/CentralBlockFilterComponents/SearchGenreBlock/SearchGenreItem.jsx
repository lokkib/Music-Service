import styled from "styled-components";

const SearchGenreItem = styled.div.attrs(props => ({
	
}))`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    &:hover {
        color: #b672ff;
        text-decoration-line: underline;
        cursor: pointer;
    }
    &:active {
        text-decoration-line: underline;
        cursor: pointer;
        color: #b672ff;
    }
`;

export default SearchGenreItem;