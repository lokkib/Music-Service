import { useContext } from 'react';

import ThemeContext from '../../../../../../themes';
import { StyledSearchIcon } from './StyledSearchIcon';

function SearchIcon() {
    const { themeMode } = useContext(ThemeContext);
    return <StyledSearchIcon style={themeMode.main} />;
}

export default SearchIcon;
