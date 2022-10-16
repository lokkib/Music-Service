import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';
import { useContext } from 'react';
import ThemeContext from '../../../../../../themes';

function BlockSearch() {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledBlockSearch style={themeMode.main}>
            <SearchIcon />
            <SearchInput></SearchInput>
        </StyledBlockSearch>
    );
}

export default BlockSearch;
