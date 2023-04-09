import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { AllTracksState } from '../../@types/slices/AllTracksState';
import { Track } from '../../@types/slices/Track';

const initialState: AllTracksState = {
    allTracks: [],
    finalGenreTracks: [],
    filteredTracksbyName: [],
    renderedTracks: [],
    trackIsPlayed: 0,
    myTracks: [],
    myTracksFiltered: [],
    finalAuthorTracksData: [],
    filterAuthorsValue: [],
    filteredByAuthor: false,
    filterGenreValue: [],
    allGenresChosen: '',
};

const storingAllTracks = createSlice({
    name: 'storeAllTracks',
    initialState,
    reducers: {
        storeAllTracks(state, action: PayloadAction<Track[]>) {
            state.allTracks = action.payload;
        },
        addFilterByAuthor: (state, action: PayloadAction<string>) => {
            state.filterAuthorsValue.push(action.payload);
            state.filteredByAuthor = true;
            state.finalAuthorTracksData = state.allTracks.filter((el) =>
                state.filterAuthorsValue.some(
                    (element) => element === el.author
                )
            );
            state.renderedTracks = state.finalAuthorTracksData;
        },
        deleteAuthors: (state, action: PayloadAction<string>) => {
            state.filterAuthorsValue = state.filterAuthorsValue.filter(
                (author) => author !== action.payload
            );
            state.finalAuthorTracksData = state.allTracks.filter((el) =>
                state.filterAuthorsValue.some(
                    (element) => element === el.author
                )
            );
            state.renderedTracks = state.finalAuthorTracksData;
        },

        addFilterByGenre: (state, action: PayloadAction<string>) => {
            state.filterGenreValue.push(action.payload);
            state.filteredByAuthor = true;
            state.finalGenreTracks = state.allTracks.filter((el) =>
                state.filterGenreValue.some((element) => element === el.genre)
            );
            state.renderedTracks = state.finalGenreTracks;
        },
        deleteGenres: (state, action: PayloadAction<string>) => {
            state.filterGenreValue = state.filterGenreValue.filter(
                (genre) => genre !== action.payload
            );
            state.finalGenreTracks = state.allTracks.filter((el) =>
                state.filterGenreValue.some((element) => element === el.genre)
            );
            state.renderedTracks = state.finalGenreTracks;
        },
        choseAllGenres(state, action: PayloadAction<string>) {
            state.allGenresChosen = action.payload;
        },
        filteringTracksName(state, action) {
            state.filteredTracksbyName = (state.allTracks as Track[]).filter(
                (el) => el.name.toLowerCase().startsWith(action.payload)
            );
        },
        holdRenderedTracks(state, action: PayloadAction<Track[] | boolean>) {
            state.renderedTracks = action.payload;
        },
        setPlayingRenderedTracks(state, action) {
            const index = action.payload;
            state.trackIsPlayed = index;
        },
        setMyTracks(state, action) {
            state.myTracks = action.payload;
        },
        filteringMyTracks(state, action) {
            state.myTracksFiltered = (state.renderedTracks as Track[]).filter(
                (el) => el.name.toLowerCase().startsWith(action.payload)
            );
        },
    },
});

export const {
    storeAllTracks,
    filteringTracksName,
    holdRenderedTracks,
    setPlayingRenderedTracks,
    setMyTracks,
    filteringMyTracks,
    addFilterByAuthor,
    deleteAuthors,
    addFilterByGenre,
    deleteGenres,
    choseAllGenres,
} = storingAllTracks.actions;

export default storingAllTracks.reducer;
