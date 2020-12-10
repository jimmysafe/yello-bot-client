import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  audios: Array<Audio>;
  guilds: Array<Guild>;
  userGuilds: Array<GuildType>;
};


export type QueryAudiosArgs = {
  guild_id: Scalars['String'];
};

/** The Audio File model */
export type Audio = {
  __typename?: 'Audio';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

/** The Channel model */
export type Guild = {
  __typename?: 'Guild';
  id: Scalars['ID'];
  guild_id: Scalars['String'];
  type: Scalars['String'];
  files: Array<Audio>;
};

/** The User Guild model */
export type GuildType = {
  __typename?: 'GuildType';
  id: Scalars['String'];
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  owner: Scalars['Boolean'];
  permissions: Scalars['Float'];
  features: Array<Scalars['String']>;
  permissions_new: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  audioFileAdd: Audio;
  audioFileDelete: Audio;
  guildUpgrade: Guild;
  stripeCheckoutCreate: Scalars['String'];
};


export type MutationAudioFileAddArgs = {
  duration: Scalars['String'];
  start: Scalars['String'];
  audioUrl: Scalars['String'];
  name: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationAudioFileDeleteArgs = {
  audio_name: Scalars['String'];
  audio_id: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationGuildUpgradeArgs = {
  guild_id: Scalars['String'];
};


export type MutationStripeCheckoutCreateArgs = {
  email: Scalars['String'];
};

export type GetAudiosQueryVariables = Exact<{
  guild_id: Scalars['String'];
}>;


export type GetAudiosQuery = (
  { __typename?: 'Query' }
  & { audios: Array<(
    { __typename?: 'Audio' }
    & Pick<Audio, 'id' | 'name' | 'url'>
  )> }
);

export type GuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type GuildsQuery = (
  { __typename?: 'Query' }
  & { guilds: Array<(
    { __typename?: 'Guild' }
    & Pick<Guild, 'id' | 'guild_id' | 'type'>
    & { files: Array<(
      { __typename?: 'Audio' }
      & Pick<Audio, 'name' | 'url'>
    )> }
  )> }
);

export type UserGuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGuildsQuery = (
  { __typename?: 'Query' }
  & { userGuilds: Array<(
    { __typename?: 'GuildType' }
    & Pick<GuildType, 'id' | 'name' | 'icon'>
  )> }
);


export const GetAudiosDocument = gql`
    query getAudios($guild_id: String!) {
  audios(guild_id: $guild_id) {
    id
    name
    url
  }
}
    `;

/**
 * __useGetAudiosQuery__
 *
 * To run a query within a React component, call `useGetAudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAudiosQuery({
 *   variables: {
 *      guild_id: // value for 'guild_id'
 *   },
 * });
 */
export function useGetAudiosQuery(baseOptions: Apollo.QueryHookOptions<GetAudiosQuery, GetAudiosQueryVariables>) {
        return Apollo.useQuery<GetAudiosQuery, GetAudiosQueryVariables>(GetAudiosDocument, baseOptions);
      }
export function useGetAudiosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAudiosQuery, GetAudiosQueryVariables>) {
          return Apollo.useLazyQuery<GetAudiosQuery, GetAudiosQueryVariables>(GetAudiosDocument, baseOptions);
        }
export type GetAudiosQueryHookResult = ReturnType<typeof useGetAudiosQuery>;
export type GetAudiosLazyQueryHookResult = ReturnType<typeof useGetAudiosLazyQuery>;
export type GetAudiosQueryResult = Apollo.QueryResult<GetAudiosQuery, GetAudiosQueryVariables>;
export const GuildsDocument = gql`
    query guilds {
  guilds {
    id
    guild_id
    type
    files {
      name
      url
    }
  }
}
    `;

/**
 * __useGuildsQuery__
 *
 * To run a query within a React component, call `useGuildsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuildsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuildsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGuildsQuery(baseOptions?: Apollo.QueryHookOptions<GuildsQuery, GuildsQueryVariables>) {
        return Apollo.useQuery<GuildsQuery, GuildsQueryVariables>(GuildsDocument, baseOptions);
      }
export function useGuildsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuildsQuery, GuildsQueryVariables>) {
          return Apollo.useLazyQuery<GuildsQuery, GuildsQueryVariables>(GuildsDocument, baseOptions);
        }
export type GuildsQueryHookResult = ReturnType<typeof useGuildsQuery>;
export type GuildsLazyQueryHookResult = ReturnType<typeof useGuildsLazyQuery>;
export type GuildsQueryResult = Apollo.QueryResult<GuildsQuery, GuildsQueryVariables>;
export const UserGuildsDocument = gql`
    query userGuilds {
  userGuilds {
    id
    name
    icon
  }
}
    `;

/**
 * __useUserGuildsQuery__
 *
 * To run a query within a React component, call `useUserGuildsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGuildsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGuildsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGuildsQuery(baseOptions?: Apollo.QueryHookOptions<UserGuildsQuery, UserGuildsQueryVariables>) {
        return Apollo.useQuery<UserGuildsQuery, UserGuildsQueryVariables>(UserGuildsDocument, baseOptions);
      }
export function useUserGuildsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGuildsQuery, UserGuildsQueryVariables>) {
          return Apollo.useLazyQuery<UserGuildsQuery, UserGuildsQueryVariables>(UserGuildsDocument, baseOptions);
        }
export type UserGuildsQueryHookResult = ReturnType<typeof useUserGuildsQuery>;
export type UserGuildsLazyQueryHookResult = ReturnType<typeof useUserGuildsLazyQuery>;
export type UserGuildsQueryResult = Apollo.QueryResult<UserGuildsQuery, UserGuildsQueryVariables>;