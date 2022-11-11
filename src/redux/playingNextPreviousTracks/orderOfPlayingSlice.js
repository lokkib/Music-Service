import { createSlice } from '@reduxjs/toolkit';

const settingOrderOfPlaying = createSlice({
    name: 'orderOfPlaying',
    initialState: {
        playingNextTrack: {
            nextTrackIsPlayed: false,
        },
        playingPreviousTrack: {
            previousTrackIsPlayed: false,
        },
        shuffleTracks: {
            isButtonPressed: false
        },
        repeatTracks: {
            isButtonPressed: false
        },
    },
    reducers: {
        playingNextTrack(state, action) {
           
            state.playingNextTrack.nextTrackIsPlayed = action.payload
        },
        playingPreviousTrack(state, action) {
            state.playingPreviousTrack.previousTrackIsPlayed = action.payload
        },
        shuffleTracks(state, action) {
            state.shuffleTracks.isButtonPressed = action.payload
        },
        repeatTrack(state, action) {
            state.repeatTracks.isButtonPressed = action.payload
        },
    }
});

export const {
    playingNextTrack,
    playingPreviousTrack,
    shuffleTracks,
    repeatTrack,
} = settingOrderOfPlaying.actions;
export default settingOrderOfPlaying.reducer;
