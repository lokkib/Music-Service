import { configureStore } from '@reduxjs/toolkit';

import { getAuthTracksApi } from './api/tracksApi';
import checkingToken from './slices/checkingTokenSlice';
import filteredChosenAuthors from './slices/filterTracks/filterTrackAuthorSlice';
import filterReducer from './slices/filterTracks/filterTrackYearSlice';
import getPlaylists from './slices/getPlaylistTracksSlice';
import changingThemeReducer from './slices/lightDarkThemeSlice';
import orderTracksPlayingReducer from './slices/orderOfPlayingSlice';
import playingReducer from './slices/playTrackSlice';
import VolumeSlice from './slices/progressPlayerSlice';
import storingTracksReducer from './slices/storingAllTracksSlice';

export const store = configureStore({
    reducer: {
        [getAuthTracksApi.reducerPath]: getAuthTracksApi.reducer,
        volume: VolumeSlice,
        playing: playingReducer,
        filterYear: filterReducer,
        storeTracks: storingTracksReducer,
        chosenAuthors: filteredChosenAuthors,
        getPlaylist: getPlaylists,
        tokenIsValid: checkingToken,
        theme: changingThemeReducer,
        orderOfTracksPlaying: orderTracksPlayingReducer,
    },

    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(getAuthTracksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
