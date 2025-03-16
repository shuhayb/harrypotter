import { api } from "../services/baseApi.ts"
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Character = {
  __typename?: "Character"
  actor?: Maybe<Scalars["String"]["output"]>
  gender?: Maybe<Scalars["String"]["output"]>
  house?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["ID"]["output"]>
  image?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
}

export type Query = {
  __typename?: "Query"
  characters: Array<Character>
}

export type CharactersQueryVariables = Exact<{ [key: string]: never }>

export type CharactersQuery = {
  __typename?: "Query"
  characters: Array<{
    __typename?: "Character"
    id?: string
    name?: string
    gender?: string
    image?: string
    actor?: string
  }>
}

export const CharactersDocument = `
    query characters {
  characters {
    id
    name
    gender
    image
    actor
  }
}
    `

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    characters: build.query<CharactersQuery, CharactersQueryVariables | void>({
      query: (variables) => ({ document: CharactersDocument, variables }),
    }),
  }),
})

export { injectedRtkApi as api }
export const { useCharactersQuery, useLazyCharactersQuery } = injectedRtkApi
