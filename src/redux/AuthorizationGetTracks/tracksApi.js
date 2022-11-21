import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';
export const getAuthTracksApi = createApi({
    reducerPath: 'TracksApi',
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/' }),
    endpoints: (build) => ({
        signup: build.mutation({
            query: (body) => ({
                url: 'user/signup/',
                method: 'POST',
                body,
            }),
        }),
        login: build.mutation({
            query: (body) => ({
                url: 'user/login/',
                method: 'POST',
                body,
            }),
        }),
        token: build.mutation({
            query: (body) => ({
                url: 'user/token/',
                method: 'POST',
                body,
            }),
        }),
        refreshToken: build.mutation({
            query: (body) => ({
                url: 'user/token/refresh/',
                method: 'POST',
                body,
            }),
        }),
        getAllTracks: build.query({
            query: () => 'catalog/track/all/',
        }),
        getPlaylist: build.query({
            query: (id) => `catalog/selection/${id}`,
        }),
        getFavouriteTracks: build.query({
            query: () => ({
                url: 'catalog/track/favorite/all',
                headers: {
                    Authorization: `Bearer ${getCookie('access')}`,
                },
            }),
            providesTags: ['Tracks'],
        }),
        addTracktoFavourite: build.mutation({
            query: (body) => ({
                url: `catalog/track/${body.id}/favorite/`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('access')}`,
                },
                body,
            }),

            invalidatesTags: ['Tracks'],
        }),
        deleteTrackFromFavourite: build.mutation({
            query: (body) => ({
                url: `catalog/track/${body.id}/favorite/`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('access')}`,
                },
                body,
            }),
            invalidatesTags: ['Tracks'],
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useTokenMutation,
    useRefreshTokenMutation,
    useGetAllTracksQuery,
    useAddTracktoFavouriteMutation,
    useDeleteTrackFromFavouriteMutation,
    useGetFavouriteTracksQuery,
    useGetPlaylistQuery,
} = getAuthTracksApi;
