import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createSlice } from "@reduxjs/toolkit";

export const playTrackApi = createApi({
    reducerPath: 'playTrack',
    baseQuery: fetchBaseQuery({baseurl: 'http://51.250.95.23:8000/'}),
    endpoints: (build) => ({
        getTrackFile: (build.query({
                query: (src) => `django_media/music_files/${src}`
            }))
})

})


const isPlayingSlice = createSlice({
    name: 'isPlaying',
    initialState: {
        isPlaying: false
    },
    reducers: {
        setPlay(state, action) {
            state.isPlaying = action.payload[0],
            state.src = `http://51.250.95.23:8000/django_media/music_files/${action.payload[1]}`
        }
    }
})


export const { useGetTrackFile } = playTrackApi

export const {setPlay} = isPlayingSlice.actions
export default isPlayingSlice.reducer