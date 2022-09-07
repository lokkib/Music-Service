import './BlockSearch.scss';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

function BlockSearch() {
    return (
        <div className="centerblock__search search">
            <SearchIcon className="search__svg"></SearchIcon>
            <SearchInput></SearchInput>
        </div>
    );
}

export default BlockSearch;
