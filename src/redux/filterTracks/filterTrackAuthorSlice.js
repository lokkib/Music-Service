import { createSlice } from '@reduxjs/toolkit';


export const filteringAuthorSlice = createSlice({
    name: 'filterAuthorSlice',
    initialState: {
        filterTracks: {
            newTracksFirstClicked: false,
            oldTracksFirstClicked: false
        },
    },
    reducers: {
        filteringAuthorSlice(state, action) {
            state.filterTracks.newTracksFirstClicked = action.payload
        }

    }

})
export const { filterAuthorSlice } = filteringAuthorSlice.actions;

export default filteringAuthorSlice.reducer;