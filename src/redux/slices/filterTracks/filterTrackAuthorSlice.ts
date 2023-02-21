import { createSlice } from '@reduxjs/toolkit';

export const filteringAuthorSlice = createSlice({
    name: 'filterAuthorSlice',
    initialState: {
        chosenAuthors: [],
    },
    reducers: {
        filteringAuthor(state, action) {
            state.chosenAuthors = action.payload;
        },
    },
});
export const { filteringAuthor } = filteringAuthorSlice.actions;

export default filteringAuthorSlice.reducer;
