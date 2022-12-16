import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from './cookies';
import { ArtistProps, ArtworkDetailByArtist, EditArtworkProps, ResponseArtist } from './types';

const rtkQuery = fetchBaseQuery({
  baseUrl: 'https://api.wwweb.kr/api',
  prepareHeaders: (
    headers,
    api: {
      endpoint: string;
    }
  ) => {
    const ARTIST_CODE = getCookie();
    if (ARTIST_CODE && api.endpoint !== 'login') {
      headers.set('code', ARTIST_CODE);
    }
    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery: rtkQuery,
  endpoints: (builder) => ({
    login: builder.mutation<ResponseArtist, string>({
      query: (artistCode) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { code: artistCode }
      }),
      transformResponse: (response: { data: ResponseArtist }) => {
        return response.data;
      }
    }),
    artistInfo: builder.query<ResponseArtist, void>({
      query: () => ({
        url: `/artists/detail`,
        method: 'GET'
      }),
      transformResponse: (response: { data: ResponseArtist }) => {
        return response.data;
      }
    }),
    editArtistInfo: builder.mutation<ResponseArtist, ArtistProps>({
      query: (info) => ({
        url: `/artists`,
        method: 'PUT',
        body: info
      })
    }),
    artworkDetailByArtist: builder.query<ArtworkDetailByArtist, void>({
      query: () => ({
        url: `/artworks`,
        method: 'GET'
      }),
      transformResponse: (response: { data: ArtworkDetailByArtist }) => {
        return response.data;
      }
    }),
    editArtworkInfo: builder.mutation<ResponseArtist, EditArtworkProps>({
      query: (artwork) => ({
        url: `/artwork`,
        method: 'PUT',
        body: artwork
      })
    }),
    fileUpload: builder.mutation<{ url: string }, FormData>({
      query: (file) => ({
        url: `/file`,
        method: 'POST',
        body: file
      }),
      transformResponse: (response: { data: { url: string } }) => {
        return response.data;
      }
    })
  })
});

export const {
  useLoginMutation,
  useArtistInfoQuery,
  useEditArtistInfoMutation,
  useArtworkDetailByArtistQuery,
  useEditArtworkInfoMutation,
  useFileUploadMutation
} = apiSlice;
