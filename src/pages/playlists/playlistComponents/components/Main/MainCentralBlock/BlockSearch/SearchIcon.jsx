import { StyledSearchIcon } from './StyledSearchIcon';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';

function SearchIcon() {
    const {theme2} = useContext(ThemeContext);
    return <StyledSearchIcon style={theme2} />;
}

export default SearchIcon;
