import { createSlice } from '@reduxjs/toolkit';

const VolumeSlice = createSlice({
    name: 'volume',
    initialState: {
        volume: 25,
    },
    reducers: {
        setVolume(state, action) {
            state.volume = action.payload;
        },
    },
});

export const { setVolume } = VolumeSlice.actions;

export default VolumeSlice.reducer;
