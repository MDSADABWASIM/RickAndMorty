import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/graphql' })

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }
  return result
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
})
