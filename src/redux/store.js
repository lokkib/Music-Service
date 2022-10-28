import { configureStore } from '@reduxjs/toolkit';
import { filteringAuthorApi } from './filterTracks/filterTracksAuthorApi';
import { getAuthTracksApi } from './AuthorizationGetTracks/tracksApi';
import { playTrackApi } from './playTrack/playTrackSlice';
import VolumeSlice from './ChangingVolume/volumeSlice';
import playingReducer from './playTrack/playTrackSlice';
import filterReducer from './filterTracks/filterTrackYearSlice';
import storingTracksReducer from './storeAllTracks/storingAllTracksSlice'

export const store = configureStore({
    reducer: {
        [getAuthTracksApi.reducerPath]: getAuthTracksApi.reducer,
        [filteringAuthorApi.reducerPath]: filteringAuthorApi.reducer,
        volume: VolumeSlice,
        playing: playingReducer,
        filterYear: filterReducer,
        storeTracks: storingTracksReducer,
        [playTrackApi.reducerPath]: playTrackApi.reducer,
    },

    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(getAuthTracksApi.middleware),
});
