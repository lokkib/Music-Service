import { StyledSearchInput } from './StyledSearchInput';
import { useContext } from 'react';
import ThemeContext, { themes } from '../../../../../../themes';

function SearchInput({ type = 'search', name = 'search' }) {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledSearchInput
            style={themeMode.dark}
            g={themeMode === themes.darkTheme ? 'dark' : 'light'}
            placeholder={'Поиск'}
            type={type}
            name={name}
        />
    );
}

export default SearchInput;
