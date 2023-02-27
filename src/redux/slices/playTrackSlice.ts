import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { isPlayingState } from '../../@types/slices/IsPlayingState';
import { Track } from '../../@types/slices/Track';

const initialState: isPlayingState = {
    isPlaying: false,
    isPlaying2: true,
    tracksPlayed: [],
    dataOfTrack: {
        author: '',
        album: '',
        id: '',
    },
    src: '',
};

const isPlayingSlice = createSlice({
    name: 'isPlaying',
    initialState,
    reducers: {
        setPlay(state, action) {
            state.isPlaying = action.payload;
        },
        setPlay2(state, action) {
            state.isPlaying2 = action.payload;
        },
        addTrackPlayed(state, action: PayloadAction<Track>) {
            state.tracksPlayed.push(action.payload);
        },
        setSrcOfTrack(state, action) {
            state.src = action.payload;
        },
        setDataOfTrack(state, action) {
            const [album, author, id] = action.payload;
            state.dataOfTrack.author = author;
            state.dataOfTrack.album = album;
            state.dataOfTrack.id = id;
        },
    },
});

export const {
    setPlay,
    setDataOfTrack,
    setPlay2,
    setSrcOfTrack,
    addTrackPlayed,
} = isPlayingSlice.actions;
export default isPlayingSlice.reducer;
