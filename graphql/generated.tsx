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
  userGuilds: Array<Guild>;
  evaluateUserRole: Scalars['String'];
};


export type QueryAudiosArgs = {
  channel_id: Scalars['String'];
};


export type QueryEvaluateUserRoleArgs = {
  channel_id: Scalars['String'];
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

/** The User Guild model */
export type Guild = {
  __typename?: 'Guild';
  id: Scalars['String'];
  name: Scalars['String'];
  icon: Scalars['String'];
  owner: Scalars['Boolean'];
  permissions: Scalars['Float'];
  features: Array<Scalars['String']>;
  permissions_new: Scalars['String'];
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

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: Array<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'channel_id' | 'type'>
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
    { __typename?: 'Guild' }
    & Pick<Guild, 'id' | 'name' | 'icon'>
  )> }
);


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
export const GetChannelsDocument = gql`
    query getChannels {
  channels {
    id
    channel_id
    type
    files {
      name
      url
    }
  }
}
    `;

/**
 * __useGetChannelsQuery__
 *
 * To run a query within a React component, call `useGetChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChannelsQuery(baseOptions?: Apollo.QueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
        return Apollo.useQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, baseOptions);
      }
export function useGetChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
          return Apollo.useLazyQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, baseOptions);
        }
export type GetChannelsQueryHookResult = ReturnType<typeof useGetChannelsQuery>;
export type GetChannelsLazyQueryHookResult = ReturnType<typeof useGetChannelsLazyQuery>;
export type GetChannelsQueryResult = Apollo.QueryResult<GetChannelsQuery, GetChannelsQueryVariables>;
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