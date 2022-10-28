import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const filteringAuthorApi = createApi({
    reducerPath: 'filteringAuthor',
    baseQuery: fetchBaseQuery({baseUrl: 'http://51.250.95.23:8000/'}),
    endpoints: (build) => ({
        getAuthors: (build.query({
            query:() => 'catalog/track/all/'
        }))
    })
})


export const {useGetAuthorsQuery} = filteringAuthorApi