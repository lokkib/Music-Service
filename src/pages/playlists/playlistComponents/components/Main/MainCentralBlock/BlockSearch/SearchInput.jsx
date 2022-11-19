import { useContext } from 'react';
import { useState } from 'react';

import ThemeContext, { themes } from '../../../../../../../themes';
import { StyledSearchInput } from './StyledSearchInput';

function SearchInput({ type = 'search', name = 'search' }) {
    const { themeMode } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState('Поиск');
    return (
        <StyledSearchInput
            style={themeMode.main}
            placeholderColor={themeMode === themes.darkTheme ? 'dark' : 'light'}
            placeholder={inputValue}
            onFocus={() => setInputValue('')}
            onBlur={() => setInputValue('Поиск')}
            type={type}
            name={name}
        />
    );
}

export default SearchInput;
