import { configureStore } from '@reduxjs/toolkit';

import { getAuthTracksApi } from './AuthorizationGetTracks/tracksApi';
import checkingToken from './checkingToken/checkingTokenSlice';
import filteredChosenAuthors from './filterTracks/filterTrackAuthorSlice';
import filterReducer from './filterTracks/filterTrackYearSlice';
import getPlaylists from './getPlaylistTracks/getPlaylistTracksSlice';
import changingThemeReducer from './lightDarkTheme/lightDarkThemeSlice';
import orderTracksPlayingReducer from './playingNextPreviousTracks/orderOfPlayingSlice';
import playingReducer from './playTrack/playTrackSlice';
import VolumeSlice from './SettingProgressPlayer/progressPlayerSlice';
import storingTracksReducer from './storeAllTracks/storingAllTracksSlice';
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
