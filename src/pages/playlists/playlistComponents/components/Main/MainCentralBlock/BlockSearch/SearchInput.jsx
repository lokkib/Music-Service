import { StyledSearchInput } from './StyledSearchInput';
import { useContext } from 'react';
import ThemeContext,{themes} from '../../../../../../../themes';

function SearchInput({ type = 'search', name = 'search' }) {
    const {theme2} = useContext(ThemeContext);
    return <StyledSearchInput  style={theme2} g={theme2 === themes.dark ? 'dark' : 'light'} placeholder="Поиск" type={type} name={name} />;
}

export default SearchInput;
