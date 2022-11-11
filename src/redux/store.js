import { configureStore } from '@reduxjs/toolkit';
import { getAuthTracksApi } from './AuthorizationGetTracks/tracksApi';
import VolumeSlice from './ChangingVolume/volumeSlice';
import playingReducer from './playTrack/playTrackSlice';
import filterReducer from './filterTracks/filterTrackYearSlice';
import storingTracksReducer from './storeAllTracks/storingAllTracksSlice';
import filteredChosenAuthors from './filterTracks/filterTrackAuthorSlice';
import getPlaylists from './getPlaylistTracks/getPlaylistTracksSlice';
import orderTracksPlayingReducer from './playingNextPreviousTracks/orderOfPlayingSlice'

export const store = configureStore({
    reducer: {
        [getAuthTracksApi.reducerPath]: getAuthTracksApi.reducer,
        volume: VolumeSlice,
        playing: playingReducer,
        filterYear: filterReducer,
        storeTracks: storingTracksReducer,
        chosenAuthors: filteredChosenAuthors,
        getPlaylist: getPlaylists,
        orderOfTracksPlaying: orderTracksPlayingReducer
    },

    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(getAuthTracksApi.middleware),
});
