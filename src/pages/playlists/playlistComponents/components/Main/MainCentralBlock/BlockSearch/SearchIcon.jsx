import { StyledSearchIcon } from './StyledSearchIcon';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';

function SearchIcon() {
    const { themeMode } = useContext(ThemeContext);
    return <StyledSearchIcon style={themeMode.main} />;
}

export default SearchIcon;
