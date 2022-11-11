import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getAuthTracksApi = createApi({
    reducerPath: 'TracksApi',
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
        getAllTracks: build.query({
            query: () => 'catalog/track/all/',
        }),
        getPlaylist: build.query({
			query: (id) => `catalog/selection/${id}`,
		})
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useTokenMutation,
    useGetAllTracksQuery,
    useGetPlaylistQuery
} = getAuthTracksApi;