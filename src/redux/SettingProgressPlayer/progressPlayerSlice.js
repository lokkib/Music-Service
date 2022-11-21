import { createSlice } from '@reduxjs/toolkit';

const progressPlayer = createSlice({
    name: 'progressPlayer',
    initialState: {
        volume: 25,
        progress: {
            max: false,
            value: false,
        },
        finalValue: false,
        audioEnded: {
            audioEnded: false,
        },
    },
    reducers: {
        setVolume(state, action) {
            state.volume = action.payload;
        },
        setProgressLine(state, action) {
            state.progress.max = action.payload;
        },
        setProgressLine2(state, action) {
            state.progress.value = action.payload;
        },
    },
});

export const { setVolume, setProgressLine, setProgressLine2 } =
    progressPlayer.actions;

export default progressPlayer.reducer;
