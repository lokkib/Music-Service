import { useContext } from 'react';

import ThemeContext from '../../../../../themes';
import SearchIcon from '../../../../Main/Main/MainCentralBlock/BlockSearch/SearchIcon';
import SearchInput from './SearchInput';
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
