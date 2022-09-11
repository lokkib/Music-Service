

import { StyledSearchInput } from './StyledSearchInput';

function SearchInput({ type = 'search', name = 'search' }) {
    return (
        <StyledSearchInput placeholder="Поиск" type={type} name={name} />
        // <input
        //     className="search__text"
        //     type={type}
        //     placeholder="Поиск"
        //     name={name}
        // />
    );
}

export default SearchInput;
