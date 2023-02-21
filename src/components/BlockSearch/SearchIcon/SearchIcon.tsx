import { useContext } from 'react';
import { StyledSearchIcon } from './StyledSearchIcon';
import ThemeContext, { themes } from '../../../themes';

const SearchIcon = () => {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledSearchIcon
            strokeColor={themeMode === themes.darkTheme ? 'white' : 'black'}
        />
    );
};

export default SearchIcon;
