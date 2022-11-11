import { createSlice } from '@reduxjs/toolkit';

export const filteringAuthorSlice = createSlice({
    name: 'filterAuthorSlice',
    initialState: {
        chosenAuthors: {
            newTracksFirstClicked: false,
            oldTracksFirstClicked: false,
        },
    },
    reducers: {
        filteringAuthorSlice(state, action) {
            state.chosenAuthors = action.payload;
        },
    },
});
export const { filterAuthorSlice } = filteringAuthorSlice.actions;

export default filteringAuthorSlice.reducer;
