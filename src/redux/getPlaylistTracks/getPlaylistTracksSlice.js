import { createSlice } from "@reduxjs/toolkit";

const getPlaylistTracksSlice = createSlice({
	name: 'getPlaylistTracksSlice',
	initialState: [
		[]
	],
	reducers: {
		getPlaylist (state, action) {
			state[0] = action.payload
		},
		
	}
})

export const {
	getPlaylist
} = getPlaylistTracksSlice.actions;


export default getPlaylistTracksSlice.reducer