import styled from 'styled-components';

const SearchPerformerGenreContainer = styled.div.attrs((props) => ({
    ref: props.ref,
}))`
    background: red;
    align-items: flex-start;
    position: absolute;
    z-index: 1;
    width: 248px;
    height: 305px;
    background: #313131;
    border-radius: 12px;
    padding: 34px;
`;

export default SearchPerformerGenreContainer;
