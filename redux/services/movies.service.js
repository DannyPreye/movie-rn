import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fakeBaseQuery({
        url: "themoviedb",
    }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => "/movies",
        }),
    }),
});

export const { useGetMoviesQuery } = moviesApi;
