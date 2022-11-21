import { createSlice } from '@reduxjs/toolkit';

const storingAllTracks = createSlice({
    name: 'storeAllTracks',
    initialState: {
        allTracks: [],
        toggledAuthorTracks: {},
        toggledGenreTracks: {},
        allTracksChosen: false,
        filteredTracksbyName: [],
        renderedTracks: [],
        trackIsPlayed: {},
        myTracks: [],
        myTracksFiltered: [],
    },
    reducers: {
        storeAllTracks(state, action) {
            state.allTracks = action.payload;
        },

        toggleChoseAuthors(state, action) {
            const [authorName, chosenValue, track] = action.payload;

            state.toggledAuthorTracks[authorName] = {
                content: track,
                chosen: chosenValue,
            };

            state.toggledAuthorTracksArray = Object.entries(
                state.toggledAuthorTracks
            );
            state.finalAuth2 = state.toggledAuthorTracksArray.filter(
                (el) => el[1].chosen === true
            );
            state.finalAuthorTracksData = state.allTracks.filter((el) => {
                return state.finalAuth2.some((element) => {
                    return element[0] === el.author;
                });
            });
        },

        toggleChoseGenre(state, action) {
            const [filteredData, chosenValue, typOfGenre] = action.payload;
            state.toggledGenreTracks[typOfGenre] = {
                content: filteredData,
                chosen: chosenValue,
            };

            state.toggledGenreTracksArray = Object.entries(
                state.toggledGenreTracks
            );

            state.finaltoggledGenreTracksArray = state.toggledGenreTracksArray
                .filter((el) => el[1].chosen === true)
                .map((el) => el[1].content);
        },
        allTracksChosen(state, action) {
            state.allTracksChosen = action.payload;
        },
        filteringTracksName(state, action) {
            state.filteredTracksbyName = state.allTracks.filter((el) => {
                return el.name.includes(action.payload);
            });
        },
        holdRenderedTracks(state, action) {
            state.renderedTracks = action.payload;
        },
        setPlayingRenderedTracks(state, action) {
            const index = action.payload;
            state.trackIsPlayed.trackIsPlayed = index;
        },
        setMyTracks(state, action) {
            state.myTracks = action.payload;
        },
        filteringMyTracks(state, action) {
            state.myTracksFiltered = state.myTracks.filter((el) => {
                return el.name.includes(action.payload);
            });
        },
    },
});

export const {
    storeAllTracks,
    toggleChoseAuthors,
    allTracksChosen,
    toggleChoseGenre,
    filteringTracksName,
    holdRenderedTracks,
    setPlayingRenderedTracks,
    addFavouriteTracks,
    setMyTracks,
    filteringMyTracks,
} = storingAllTracks.actions;

export default storingAllTracks.reducer;
