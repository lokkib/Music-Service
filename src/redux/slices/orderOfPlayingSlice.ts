import { createSlice } from '@reduxjs/toolkit';

const settingOrderOfPlaying = createSlice({
    name: 'orderOfPlaying',
    initialState: {
        playingNextTrack: {
            chosenTrack: [],
        },
        playingPreviousTrack: {
            chosenTrack: [],
        },
        shuffleTracks: {
            isButtonPressed: false,
            sortedRenderedTracks: [],
        },
        repeatTracks: {
            isButtonPressed: false,
        },
    },
    reducers: {
        playingNextTrack(state, action) {
            state.playingNextTrack.chosenTrack = action.payload;
        },
        playingPreviousTrack(state, action) {
            state.playingPreviousTrack.chosenTrack = action.payload;
        },
        shuffleTracks(state, action) {
            state.shuffleTracks.isButtonPressed = action.payload;
        },
        repeatTrack(state, action) {
            state.repeatTracks.isButtonPressed = action.payload;
        },
        passSortedRenderedTracks(state, action) {
            const data = [...action.payload].sort(() => Math.random() - 0.5);

            state.shuffleTracks.sortedRenderedTracks = data;
        },
    },
});

export const {
    playingNextTrack,
    playingPreviousTrack,
    shuffleTracks,
    repeatTrack,
    passSortedRenderedTracks,
} = settingOrderOfPlaying.actions;
export default settingOrderOfPlaying.reducer;
