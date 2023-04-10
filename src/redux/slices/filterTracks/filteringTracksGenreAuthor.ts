import { createSlice } from '@reduxjs/toolkit';
import { FilteringAuthorsGenreState } from '../../../@types/slices/FilteringAuthorsGenreState';

const initialState: FilteringAuthorsGenreState = {
    genresChosen: [],
    authorsChosen: [],
};

export const filteringGenreAuthorsSlice = createSlice({
    name: 'filterAuthorGenre',
    initialState,
    reducers: {
        passGenreChosen(state, action) {
            state.genresChosen = [...state.genresChosen, action.payload];
        },
        deleteGenreChosen(state, action) {
            state.genresChosen = state.genresChosen.filter(
                (el) => el !== action.payload
            );
        },
        passAuthorChosen(state, action) {
            state.authorsChosen = [...state.authorsChosen, action.payload];
        },
        deleteAuthorChosen(state, action) {
            state.authorsChosen = state.authorsChosen.filter(
                (el) => el !== action.payload
            );
        },
    },
});

export const {
    passGenreChosen,
    deleteGenreChosen,
    passAuthorChosen,
    deleteAuthorChosen,
} = filteringGenreAuthorsSlice.actions;

export default filteringGenreAuthorsSlice.reducer;
