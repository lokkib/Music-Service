import { createSlice } from '@reduxjs/toolkit';

export const filteringYearSlice = createSlice({
    name: 'filterYear',
    initialState: {
        filterTracks: {
            newTracksFirstClicked: false,
            oldTracksFirstClicked: false,
        },
    },
    reducers: {
        showNewFirst(state, action) {
            state.filterTracks.newTracksFirstClicked = action.payload;
        },
        showOldFirst(state, action) {
            state.filterTracks.oldTracksFirstClicked = action.payload;
        },
    },
});

export const { showNewFirst, showOldFirst } = filteringYearSlice.actions;

export default filteringYearSlice.reducer;
