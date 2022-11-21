import { createSlice } from '@reduxjs/toolkit';

const getPlaylistTracksSlice = createSlice({
    name: 'getPlaylistTracksSlice',
    initialState: [[], []],
    reducers: {
        getPlaylist(state, action) {
            state[0] = action.payload;
        },
        filteringPlaylistTracks(state, action) {
            state[1] = state[0].filter((el) => {
                return el.name.includes(action.payload);
            });
        },
    },
});

export const { getPlaylist, filteringPlaylistTracks } =
    getPlaylistTracksSlice.actions;

export default getPlaylistTracksSlice.reducer;
