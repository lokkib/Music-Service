
import { createSlice } from '@reduxjs/toolkit';



const isPlayingSlice = createSlice({
    name: 'isPlaying',
    initialState: {
        isPlaying: false,
        authorTrackName: {
            author: '',
            album: ''
        }
    },
    reducers: {
        setPlay(state, action) {
            (state.isPlaying = action.payload[0]),
                (state.src = `https://painassasin.online/media/music_files/${action.payload[1]}`);
        },
        setAuthorTrack(state, action) {
            const [album, author] = action.payload
            state.authorTrackName.author = author;
            state.authorTrackName.album = album;
        }

    },
});


export const { setPlay, setAuthorTrack } = isPlayingSlice.actions;
export default isPlayingSlice.reducer;
