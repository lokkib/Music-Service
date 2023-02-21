import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../../@types/slices/Track';
import { ChosenAuthor } from '../../@types/slices/ChosenAuthor';
import { AllTracksState } from '../../@types/slices/AllTracksState';

const initialState: AllTracksState = {
    allTracks: [],
    toggledAuthorTracks: [],
    toggledGenreTracks: {},
    allTracksChosen: false,
    filteredTracksbyName: [],
    renderedTracks: [],
    trackIsPlayed: {},
    myTracks: [],
    myTracksFiltered: [],
    finalAuthorTracksData: [],
};

const storingAllTracks = createSlice({
    name: 'storeAllTracks',
    initialState,
    reducers: {
        storeAllTracks(state, action) {
            state.allTracks = action.payload;
        },

        toggleChoseAuthors(state, action: PayloadAction<Track[]>) {
            const [track] = action.payload;

            // console.log(chosenValue)

            state.toggledAuthorTracks.push(track);
            if (!state.toggledAuthorTracks.includes(track.author)) {
                state.finalAuthorTracksData = state.toggledAuthorTracks;
            } else {
                state.finalAuthorTracksData = state.allTracks.filter(
                    (element) => element.author !== track.author
                );
            }

            // const unique = [];
            // state.toggledAuthorTracks.forEach(() => {
            //     if (!unique.includes(element)) {
            //         unique.push(element);
            //     }
            // })

            // if(state.toggledAuthorTracks.length === 1) {
            //     state.finalAuthorTracksData = [...state.toggledAuthorTracks.map((el) => el.track)]
            // }
            // if(state.toggledAuthorTracks.length > 1) {
            //     const check = state.toggledAuthorTracks.some(el => el.performer === action.payload.performer)
            //     console.log(check)
            //      if(!check) {
            //          state.finalAuthorTracksData = [...state.toggledAuthorTracks.map((el) => el.track)]
            //      }
            //      else {
            //          state.finalAuthorTracksData = state.toggledAuthorTracks.filter((el) => el.performer !== action.payload.performer).map((el) => el.track)
            //      }
            // }

            //     for (const elem of  ar) {

            //         if(elem.author !== action.payload.performer) {
            //            ar.push(elem)
            //         }
            //        else {
            //         console.log('повтор')
            //         ar = state.toggledAuthorTracks.filter((el) => el.performer !== action.payload.performer).map((el) => el.track)
            //        }
            //    }

            // console.log( state.toggledAuthorTracks)
            // chosen: chosenValue,

            // const filtered = state.toggledAuthorTracks.filter((el) => )

            // state.toggledAuthorTracksArray = Object.entries(
            //     state.toggledAuthorTracks
            // );
            // state.finalAuth2 = state.toggledAuthorTracksArray.filter(
            //     (el) => el[1].chosen === true
            // );
            // state.finalAuthorTracksData = state.allTracks.filter((el) =>
            //     state.finalAuth2.some((element) => element[0] === el.author)
            // );
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
            state.filteredTracksbyName = state.allTracks.filter((el) =>
                el.name.includes(action.payload)
            );
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
            state.myTracksFiltered = state.myTracks.filter((el) =>
                el.name.includes(action.payload)
            );
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
