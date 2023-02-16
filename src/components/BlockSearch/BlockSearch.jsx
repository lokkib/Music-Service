import { useContext } from 'react';

import ThemeContext from '../../themes';
import SearchIcon from './SearchIcon/SearchIcon';
import SearchInput from './SearchInput/SearchInput';
import { StyledBlockSearch } from './StyledBlockSearch';

const BlockSearch = () => {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledBlockSearch style={themeMode.main}>
            <SearchIcon />
            <SearchInput />
        </StyledBlockSearch>
    );
};

export default BlockSearch;
