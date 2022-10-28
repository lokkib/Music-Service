import styled from "styled-components";

const SearchPerformerGenreContainer = styled.div.attrs(props => ({
    ref: props.ref,
}))`
display: flex;
border-box: box-sizing;
flex-direction: column;
align-items: flex-start;
position: absolute;
z-index: 1;
width: 248px;
height: 305px;
// height: ${(props) => props.hasScroll ? '305px' : 'auto' };
min-height: 305px;
background: #313131;
border-radius: 12px;
padding: 34px;
gap: 24px;
`

export default SearchPerformerGenreContainer