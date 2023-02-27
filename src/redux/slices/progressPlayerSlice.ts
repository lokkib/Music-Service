import { createSlice } from '@reduxjs/toolkit';
import { ProgressPlayerState } from '../../@types/slices/ProgressPlayerState';

const initialState: ProgressPlayerState = {
    volume: 25,
    progress: {
        max: 0,
        value: 0,
    },
    finalValue: 0,
    audioEnded: {
        audioEnded: false,
    },
};

const progressPlayer = createSlice({
    name: 'progressPlayer',
    initialState,
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
