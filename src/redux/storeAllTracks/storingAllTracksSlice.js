import { createSlice } from "@reduxjs/toolkit";


const storingAllTracks = createSlice({
    name: 'storeAllTracks',
    initialState: {
        allTracks: []
    },
    reducers: {
        storeAllTracks(state, action) {
            state.allTracks = action.payload
        }
    }
})


export const {storeAllTracks} = storingAllTracks.actions

export default storingAllTracks.reducer 