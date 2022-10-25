import { useContext } from 'react';

import ThemeContext, { themes } from '../../../../../../themes';
import { StyledSearchInput } from './StyledSearchInput';

function SearchInput({ type = 'search', name = 'search' }) {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledSearchInput
            style={themeMode.dark}
            placeholderColor={themeMode === themes.darkTheme ? 'dark' : 'light'}
            placeholder={'Поиск'}
            type={type}
            name={name}
        />
    );
}

export default SearchInput;
