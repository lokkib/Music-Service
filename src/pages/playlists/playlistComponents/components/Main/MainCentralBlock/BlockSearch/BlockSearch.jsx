import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';

function BlockSearch() {
    const {theme2} = useContext(ThemeContext);
    return (
        <StyledBlockSearch style={theme2}>
            <SearchIcon />
            <SearchInput></SearchInput>
        </StyledBlockSearch>
    );
}

export default BlockSearch;
