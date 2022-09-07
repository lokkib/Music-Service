import './SearchInput.scss';

function SearchInput({ type = 'search', name = 'search' }) {
    return (
        <input
            className="search__text"
            type={type}
            placeholder="Поиск"
            name={name}
        />
    );
}

export default SearchInput;
