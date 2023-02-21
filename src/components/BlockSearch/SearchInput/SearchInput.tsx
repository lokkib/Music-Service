import { useContext, useRef, useState } from 'react';
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
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const handleInputValue = (e) => {
        setValueInput(e.target.value);
        dispatch(filteringTracksName(e.target.value));
        dispatch(filteringPlaylistTracks(e.target.value));
        dispatch(filteringMyTracks(e.target.value));
    };

    const clearPlaceholder = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
            setPlaceholderText('');
        }
    };

    return (
        <StyledSearchInput
            ref={inputRef}
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
