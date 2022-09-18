import { StyledSearchInput } from './StyledSearchInput';

function SearchInput({ type = 'search', name = 'search' }) {
    return <StyledSearchInput placeholder="Поиск" type={type} name={name} />;
}

export default SearchInput;
