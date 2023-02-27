import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { filteringPlaylistTracks } from '../../../redux/slices/getPlaylistTracksSlice';
import {
    filteringTracksName,
    filteringMyTracks,
} from '../../../redux/slices/storingAllTracksSlice';
import ThemeContext, { themes } from '../../../themes';
import { StyledSearchInput } from './StyledSearchInput';

const SearchInput = ({ type = 'search', name = 'search' }) => {
    const { themeMode } = useContext(ThemeContext);
    const [valueInput, setValueInput] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Поиск');

    const dispatch = useDispatch();

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
        dispatch(filteringTracksName(e.target.value.toLowerCase()));
        dispatch(filteringPlaylistTracks(e.target.value));
        dispatch(filteringMyTracks(e.target.value.toLowerCase()));
    };

    const clearPlaceholder = () => {
        setPlaceholderText('');
    };

    return (
        <StyledSearchInput
            onFocus={clearPlaceholder}
            style={themeMode.main}
            value={valueInput}
            onChange={handleInputValue}
            placeholderColor={
                themeMode === themes.darkTheme ? 'white' : 'black'
            }
            placeholder={placeholderText}
            onBlur={() => setPlaceholderText('Поиск')}
            type={type}
            name={name}
        />
    );
};

export default SearchInput;
