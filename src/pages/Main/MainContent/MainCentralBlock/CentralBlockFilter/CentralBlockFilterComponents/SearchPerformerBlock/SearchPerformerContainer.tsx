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
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 8px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        height: 50px;
        width: 7px;
        background: #009ee4;
        border-radius: 10px;

        &:hover {
            background-color: #04658f;
        }
        &:active {
            background-color: #04658f;
        }
    }
`;

export default SearchPerformerGenreContainer;
