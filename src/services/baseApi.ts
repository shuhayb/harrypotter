import { createApi } from "@reduxjs/toolkit/query/react"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"
import { CharactersDocument } from "./hooks.generated.ts"

// Create RTK Query API slice
export const api = createApi({
  reducerPath: "charactersApi",
  baseQuery: graphqlRequestBaseQuery({ url: "http://localhost:4000/graphql" }), // Proxy through Express
  endpoints: (builder) => ({
    getCharacters: builder.query<any, void>({
      query: () => ({
        document: CharactersDocument,
      }),
    }),
  }),
})
