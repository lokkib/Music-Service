import { createSlice } from '@reduxjs/toolkit';
import { PlaylistState } from '../../@types/slices/PlaylistState';

const initialState: PlaylistState = [[], []];

const getPlaylistTracksSlice = createSlice({
    name: 'getPlaylistTracksSlice',
    initialState,
    reducers: {
        getPlaylist(state, action) {
            state[0] = action.payload;
        },
        filteringPlaylistTracks(state, action) {
            state[1] = state[0].filter((el) =>
                el.name.toLowerCase().startsWith(action.payload)
            );
        },
    },
});

export const { getPlaylist, filteringPlaylistTracks } =
    getPlaylistTracksSlice.actions;

export default getPlaylistTracksSlice.reducer;
