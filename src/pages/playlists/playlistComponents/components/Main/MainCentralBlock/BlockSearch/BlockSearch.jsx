import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import SearchIcon from '../../../../../../main/components/Main/MainCentralBlock/BlockSearch/SearchIcon';
import SearchInput from './SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';

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
