
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';

function BlockSearch() {
    return (
        <StyledBlockSearch>
            <SearchIcon className="search__svg"></SearchIcon>
            <SearchInput></SearchInput>
        </StyledBlockSearch>
        // <div className="centerblock__search search">

        // </div>
    );
}

export default BlockSearch;
