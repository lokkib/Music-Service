import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';

function BlockSearch() {
    return (
        <StyledBlockSearch>
            <SearchIcon />
            <SearchInput></SearchInput>
        </StyledBlockSearch>
    );
}

export default BlockSearch;
