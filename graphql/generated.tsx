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
  channels: Array<Channel>;
  auth: AuthResponse;
};


export type QueryAudiosArgs = {
  channel_id: Scalars['String'];
};


export type QueryAuthArgs = {
  code: Scalars['String'];
};

/** The Audio File model */
export type Audio = {
  __typename?: 'Audio';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

/** The Channel model */
export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  channel_id: Scalars['String'];
  type: Scalars['String'];
  files: Array<Audio>;
};

/** Auth response model */
export type AuthResponse = {
  __typename?: 'AuthResponse';
  access_token: Scalars['String'];
  token_type: Scalars['String'];
  expires_in: Scalars['Float'];
  refresh_token: Scalars['String'];
  scope: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  audioFileAdd: Audio;
  audioFileDelete: Audio;
  channelUpgrade: Channel;
  stripeCheckoutCreate: Scalars['String'];
};


export type MutationAudioFileAddArgs = {
  duration: Scalars['String'];
  start: Scalars['String'];
  audioUrl: Scalars['String'];
  name: Scalars['String'];
  channel_id: Scalars['String'];
};


export type MutationAudioFileDeleteArgs = {
  audio_name: Scalars['String'];
  audio_id: Scalars['String'];
  channel_id: Scalars['String'];
};


export type MutationChannelUpgradeArgs = {
  channel_id: Scalars['String'];
};


export type MutationStripeCheckoutCreateArgs = {
  email: Scalars['String'];
};

export type DiscordAuthQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type DiscordAuthQuery = (
  { __typename?: 'Query' }
  & { auth: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'access_token' | 'refresh_token'>
  ) }
);

export type GetChannelAudiosQueryVariables = Exact<{
  channel_id: Scalars['String'];
}>;


export type GetChannelAudiosQuery = (
  { __typename?: 'Query' }
  & { audios: Array<(
    { __typename?: 'Audio' }
    & Pick<Audio, 'id' | 'name' | 'url'>
  )> }
);


export const DiscordAuthDocument = gql`
    query discordAuth($code: String!) {
  auth(code: $code) {
    access_token
    refresh_token
  }
}
    `;

/**
 * __useDiscordAuthQuery__
 *
 * To run a query within a React component, call `useDiscordAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscordAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscordAuthQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useDiscordAuthQuery(baseOptions: Apollo.QueryHookOptions<DiscordAuthQuery, DiscordAuthQueryVariables>) {
        return Apollo.useQuery<DiscordAuthQuery, DiscordAuthQueryVariables>(DiscordAuthDocument, baseOptions);
      }
export function useDiscordAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscordAuthQuery, DiscordAuthQueryVariables>) {
          return Apollo.useLazyQuery<DiscordAuthQuery, DiscordAuthQueryVariables>(DiscordAuthDocument, baseOptions);
        }
export type DiscordAuthQueryHookResult = ReturnType<typeof useDiscordAuthQuery>;
export type DiscordAuthLazyQueryHookResult = ReturnType<typeof useDiscordAuthLazyQuery>;
export type DiscordAuthQueryResult = Apollo.QueryResult<DiscordAuthQuery, DiscordAuthQueryVariables>;
export const GetChannelAudiosDocument = gql`
    query getChannelAudios($channel_id: String!) {
  audios(channel_id: $channel_id) {
    id
    name
    url
  }
}
    `;

/**
 * __useGetChannelAudiosQuery__
 *
 * To run a query within a React component, call `useGetChannelAudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelAudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelAudiosQuery({
 *   variables: {
 *      channel_id: // value for 'channel_id'
 *   },
 * });
 */
export function useGetChannelAudiosQuery(baseOptions: Apollo.QueryHookOptions<GetChannelAudiosQuery, GetChannelAudiosQueryVariables>) {
        return Apollo.useQuery<GetChannelAudiosQuery, GetChannelAudiosQueryVariables>(GetChannelAudiosDocument, baseOptions);
      }
export function useGetChannelAudiosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelAudiosQuery, GetChannelAudiosQueryVariables>) {
          return Apollo.useLazyQuery<GetChannelAudiosQuery, GetChannelAudiosQueryVariables>(GetChannelAudiosDocument, baseOptions);
        }
export type GetChannelAudiosQueryHookResult = ReturnType<typeof useGetChannelAudiosQuery>;
export type GetChannelAudiosLazyQueryHookResult = ReturnType<typeof useGetChannelAudiosLazyQuery>;
export type GetChannelAudiosQueryResult = Apollo.QueryResult<GetChannelAudiosQuery, GetChannelAudiosQueryVariables>;