import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dev.codeleap.co.uk/careers/';

export const getData = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getData: builder.query({
      query: () => '/',
    }),
  }),
});

export const {useGetDataQuery} = getData;
