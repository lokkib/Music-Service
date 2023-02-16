import { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { filteringPlaylistTracks } from '../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
import {
    filteringTracksName,
    filteringMyTracks,
} from '../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext, { themes } from '../../../themes';
import { StyledSearchInput } from './StyledSearchInput';

const SearchInput = ({ type = 'search', name = 'search' }) => {
    const { themeMode } = useContext(ThemeContext);
    const [valueInput, setValueInput] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Поиск');
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const handleInputValue = (e) => {
        setValueInput(e.target.value);
        dispatch(filteringTracksName(e.target.value));
        dispatch(filteringPlaylistTracks(e.target.value));
        dispatch(filteringMyTracks(e.target.value));
    };

    const clearPlaceholder = () => {
        inputRef.current.focus();
        setPlaceholderText(undefined);
    };

    return (
        <StyledSearchInput
            ref={inputRef}
            clearPlaceholder={clearPlaceholder}
            style={themeMode.dark}
            value={valueInput}
            onChange={handleInputValue}
            placeholderColor={themeMode === themes.darkTheme ? 'dark' : 'light'}
            placeholder={placeholderText}
            onBlur={() => setPlaceholderText('Поиск')}
            type={type}
            name={name}
        />
    );
};

export default SearchInput;
