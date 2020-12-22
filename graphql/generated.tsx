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
  user: UserType;
  guilds: Array<Guild>;
  guild: Guild;
  userGuilds: Array<GuildType>;
  guildRoles: Array<RoleType>;
  audios: Array<Audio>;
};


export type QueryGuildArgs = {
  guild_id: Scalars['String'];
};


export type QueryGuildRolesArgs = {
  guild_id: Scalars['String'];
};


export type QueryAudiosArgs = {
  guild_id: Scalars['String'];
};

/** The User model */
export type UserType = {
  __typename?: 'UserType';
  id: Scalars['String'];
  username: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  accessToken: Scalars['String'];
  guilds: Array<GuildType>;
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

/** The Channel model */
export type Guild = {
  __typename?: 'Guild';
  id: Scalars['ID'];
  guild_id: Scalars['String'];
  guild_name: Scalars['String'];
  guild_icon?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  prefix: Scalars['String'];
  roles: Array<RoleType>;
  owner: Scalars['String'];
  files: Array<Audio>;
};

/** The Guild Role model */
export type RoleType = {
  __typename?: 'RoleType';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** The Audio File model */
export type Audio = {
  __typename?: 'Audio';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
  guild: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  userLogout: Scalars['String'];
  guildUpgrade: Guild;
  guildSettingsUpdate: Guild;
  audioFileAdd: Audio;
  audioFileDelete: Audio;
  audioFileUpdate: Audio;
  stripeCheckoutCreate: Scalars['String'];
};


export type MutationGuildUpgradeArgs = {
  guild_id: Scalars['String'];
};


export type MutationGuildSettingsUpdateArgs = {
  roles: Array<RoleInput>;
  prefix: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationAudioFileAddArgs = {
  end: Scalars['Float'];
  start: Scalars['Float'];
  audioUrl: Scalars['String'];
  name: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationAudioFileDeleteArgs = {
  audio_name: Scalars['String'];
  audio_id: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationAudioFileUpdateArgs = {
  new_audio_name: Scalars['String'];
  audio_name: Scalars['String'];
  audio_id: Scalars['String'];
  guild_id: Scalars['String'];
};


export type MutationStripeCheckoutCreateArgs = {
  guild_name: Scalars['String'];
  guild_id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type RoleInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AddAudioMutationVariables = Exact<{
  name: Scalars['String'];
  guild_id: Scalars['String'];
  audioUrl: Scalars['String'];
  start: Scalars['Float'];
  end: Scalars['Float'];
}>;


export type AddAudioMutation = (
  { __typename?: 'Mutation' }
  & { audioFileAdd: (
    { __typename?: 'Audio' }
    & Pick<Audio, 'id' | 'url'>
  ) }
);

export type DeleteAudioMutationVariables = Exact<{
  audio_name: Scalars['String'];
  guild_id: Scalars['String'];
  audio_id: Scalars['String'];
}>;


export type DeleteAudioMutation = (
  { __typename?: 'Mutation' }
  & { audioFileDelete: (
    { __typename?: 'Audio' }
    & Pick<Audio, 'id' | 'url'>
  ) }
);

export type EditAudioMutationVariables = Exact<{
  audio_name: Scalars['String'];
  guild_id: Scalars['String'];
  audio_id: Scalars['String'];
  new_audio_name: Scalars['String'];
}>;


export type EditAudioMutation = (
  { __typename?: 'Mutation' }
  & { audioFileUpdate: (
    { __typename?: 'Audio' }
    & Pick<Audio, 'id' | 'url'>
  ) }
);

export type GuildUpgradeMutationVariables = Exact<{
  guild_id: Scalars['String'];
}>;


export type GuildUpgradeMutation = (
  { __typename?: 'Mutation' }
  & { guildUpgrade: (
    { __typename?: 'Guild' }
    & Pick<Guild, 'guild_id' | 'type'>
  ) }
);

export type StripeCheckoutCreateMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  guild_id: Scalars['String'];
  guild_name: Scalars['String'];
}>;


export type StripeCheckoutCreateMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'stripeCheckoutCreate'>
);

export type UpdateGuildSettingsMutationVariables = Exact<{
  guild_id: Scalars['String'];
  roles: Array<RoleInput>;
  prefix: Scalars['String'];
}>;


export type UpdateGuildSettingsMutation = (
  { __typename?: 'Mutation' }
  & { guildSettingsUpdate: (
    { __typename?: 'Guild' }
    & Pick<Guild, 'prefix' | 'guild_id'>
    & { roles: Array<(
      { __typename?: 'RoleType' }
      & Pick<RoleType, 'id' | 'name'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'userLogout'>
);

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

export type GuildQueryVariables = Exact<{
  guild_id: Scalars['String'];
}>;


export type GuildQuery = (
  { __typename?: 'Query' }
  & { guild: (
    { __typename?: 'Guild' }
    & Pick<Guild, 'id' | 'guild_id' | 'type' | 'prefix' | 'guild_name' | 'guild_icon' | 'owner'>
    & { roles: Array<(
      { __typename?: 'RoleType' }
      & Pick<RoleType, 'id' | 'name'>
    )>, files: Array<(
      { __typename?: 'Audio' }
      & Pick<Audio, 'id'>
    )> }
  ) }
);

export type GuildRolesQueryVariables = Exact<{
  guild_id: Scalars['String'];
}>;


export type GuildRolesQuery = (
  { __typename?: 'Query' }
  & { guildRoles: Array<(
    { __typename?: 'RoleType' }
    & Pick<RoleType, 'id' | 'name'>
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

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'avatar' | 'email' | 'accessToken'>
    & { guilds: Array<(
      { __typename?: 'GuildType' }
      & Pick<GuildType, 'id' | 'name' | 'icon' | 'owner' | 'permissions' | 'features' | 'permissions_new'>
    )> }
  ) }
);

export type UserGuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGuildsQuery = (
  { __typename?: 'Query' }
  & { userGuilds: Array<(
    { __typename?: 'GuildType' }
    & Pick<GuildType, 'id' | 'name' | 'icon'>
  )> }
);


export const AddAudioDocument = gql`
    mutation addAudio($name: String!, $guild_id: String!, $audioUrl: String!, $start: Float!, $end: Float!) {
  audioFileAdd(
    name: $name
    guild_id: $guild_id
    audioUrl: $audioUrl
    start: $start
    end: $end
  ) {
    id
    url
  }
}
    `;
export type AddAudioMutationFn = Apollo.MutationFunction<AddAudioMutation, AddAudioMutationVariables>;

/**
 * __useAddAudioMutation__
 *
 * To run a mutation, you first call `useAddAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAudioMutation, { data, loading, error }] = useAddAudioMutation({
 *   variables: {
 *      name: // value for 'name'
 *      guild_id: // value for 'guild_id'
 *      audioUrl: // value for 'audioUrl'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useAddAudioMutation(baseOptions?: Apollo.MutationHookOptions<AddAudioMutation, AddAudioMutationVariables>) {
        return Apollo.useMutation<AddAudioMutation, AddAudioMutationVariables>(AddAudioDocument, baseOptions);
      }
export type AddAudioMutationHookResult = ReturnType<typeof useAddAudioMutation>;
export type AddAudioMutationResult = Apollo.MutationResult<AddAudioMutation>;
export type AddAudioMutationOptions = Apollo.BaseMutationOptions<AddAudioMutation, AddAudioMutationVariables>;
export const DeleteAudioDocument = gql`
    mutation deleteAudio($audio_name: String!, $guild_id: String!, $audio_id: String!) {
  audioFileDelete(
    audio_name: $audio_name
    guild_id: $guild_id
    audio_id: $audio_id
  ) {
    id
    url
  }
}
    `;
export type DeleteAudioMutationFn = Apollo.MutationFunction<DeleteAudioMutation, DeleteAudioMutationVariables>;

/**
 * __useDeleteAudioMutation__
 *
 * To run a mutation, you first call `useDeleteAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAudioMutation, { data, loading, error }] = useDeleteAudioMutation({
 *   variables: {
 *      audio_name: // value for 'audio_name'
 *      guild_id: // value for 'guild_id'
 *      audio_id: // value for 'audio_id'
 *   },
 * });
 */
export function useDeleteAudioMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAudioMutation, DeleteAudioMutationVariables>) {
        return Apollo.useMutation<DeleteAudioMutation, DeleteAudioMutationVariables>(DeleteAudioDocument, baseOptions);
      }
export type DeleteAudioMutationHookResult = ReturnType<typeof useDeleteAudioMutation>;
export type DeleteAudioMutationResult = Apollo.MutationResult<DeleteAudioMutation>;
export type DeleteAudioMutationOptions = Apollo.BaseMutationOptions<DeleteAudioMutation, DeleteAudioMutationVariables>;
export const EditAudioDocument = gql`
    mutation editAudio($audio_name: String!, $guild_id: String!, $audio_id: String!, $new_audio_name: String!) {
  audioFileUpdate(
    audio_name: $audio_name
    guild_id: $guild_id
    audio_id: $audio_id
    new_audio_name: $new_audio_name
  ) {
    id
    url
  }
}
    `;
export type EditAudioMutationFn = Apollo.MutationFunction<EditAudioMutation, EditAudioMutationVariables>;

/**
 * __useEditAudioMutation__
 *
 * To run a mutation, you first call `useEditAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAudioMutation, { data, loading, error }] = useEditAudioMutation({
 *   variables: {
 *      audio_name: // value for 'audio_name'
 *      guild_id: // value for 'guild_id'
 *      audio_id: // value for 'audio_id'
 *      new_audio_name: // value for 'new_audio_name'
 *   },
 * });
 */
export function useEditAudioMutation(baseOptions?: Apollo.MutationHookOptions<EditAudioMutation, EditAudioMutationVariables>) {
        return Apollo.useMutation<EditAudioMutation, EditAudioMutationVariables>(EditAudioDocument, baseOptions);
      }
export type EditAudioMutationHookResult = ReturnType<typeof useEditAudioMutation>;
export type EditAudioMutationResult = Apollo.MutationResult<EditAudioMutation>;
export type EditAudioMutationOptions = Apollo.BaseMutationOptions<EditAudioMutation, EditAudioMutationVariables>;
export const GuildUpgradeDocument = gql`
    mutation guildUpgrade($guild_id: String!) {
  guildUpgrade(guild_id: $guild_id) {
    guild_id
    type
  }
}
    `;
export type GuildUpgradeMutationFn = Apollo.MutationFunction<GuildUpgradeMutation, GuildUpgradeMutationVariables>;

/**
 * __useGuildUpgradeMutation__
 *
 * To run a mutation, you first call `useGuildUpgradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGuildUpgradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [guildUpgradeMutation, { data, loading, error }] = useGuildUpgradeMutation({
 *   variables: {
 *      guild_id: // value for 'guild_id'
 *   },
 * });
 */
export function useGuildUpgradeMutation(baseOptions?: Apollo.MutationHookOptions<GuildUpgradeMutation, GuildUpgradeMutationVariables>) {
        return Apollo.useMutation<GuildUpgradeMutation, GuildUpgradeMutationVariables>(GuildUpgradeDocument, baseOptions);
      }
export type GuildUpgradeMutationHookResult = ReturnType<typeof useGuildUpgradeMutation>;
export type GuildUpgradeMutationResult = Apollo.MutationResult<GuildUpgradeMutation>;
export type GuildUpgradeMutationOptions = Apollo.BaseMutationOptions<GuildUpgradeMutation, GuildUpgradeMutationVariables>;
export const StripeCheckoutCreateDocument = gql`
    mutation stripeCheckoutCreate($email: String!, $name: String!, $guild_id: String!, $guild_name: String!) {
  stripeCheckoutCreate(
    email: $email
    name: $name
    guild_id: $guild_id
    guild_name: $guild_name
  )
}
    `;
export type StripeCheckoutCreateMutationFn = Apollo.MutationFunction<StripeCheckoutCreateMutation, StripeCheckoutCreateMutationVariables>;

/**
 * __useStripeCheckoutCreateMutation__
 *
 * To run a mutation, you first call `useStripeCheckoutCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStripeCheckoutCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stripeCheckoutCreateMutation, { data, loading, error }] = useStripeCheckoutCreateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      guild_id: // value for 'guild_id'
 *      guild_name: // value for 'guild_name'
 *   },
 * });
 */
export function useStripeCheckoutCreateMutation(baseOptions?: Apollo.MutationHookOptions<StripeCheckoutCreateMutation, StripeCheckoutCreateMutationVariables>) {
        return Apollo.useMutation<StripeCheckoutCreateMutation, StripeCheckoutCreateMutationVariables>(StripeCheckoutCreateDocument, baseOptions);
      }
export type StripeCheckoutCreateMutationHookResult = ReturnType<typeof useStripeCheckoutCreateMutation>;
export type StripeCheckoutCreateMutationResult = Apollo.MutationResult<StripeCheckoutCreateMutation>;
export type StripeCheckoutCreateMutationOptions = Apollo.BaseMutationOptions<StripeCheckoutCreateMutation, StripeCheckoutCreateMutationVariables>;
export const UpdateGuildSettingsDocument = gql`
    mutation updateGuildSettings($guild_id: String!, $roles: [RoleInput!]!, $prefix: String!) {
  guildSettingsUpdate(guild_id: $guild_id, roles: $roles, prefix: $prefix) {
    roles {
      id
      name
    }
    prefix
    guild_id
  }
}
    `;
export type UpdateGuildSettingsMutationFn = Apollo.MutationFunction<UpdateGuildSettingsMutation, UpdateGuildSettingsMutationVariables>;

/**
 * __useUpdateGuildSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateGuildSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuildSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuildSettingsMutation, { data, loading, error }] = useUpdateGuildSettingsMutation({
 *   variables: {
 *      guild_id: // value for 'guild_id'
 *      roles: // value for 'roles'
 *      prefix: // value for 'prefix'
 *   },
 * });
 */
export function useUpdateGuildSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGuildSettingsMutation, UpdateGuildSettingsMutationVariables>) {
        return Apollo.useMutation<UpdateGuildSettingsMutation, UpdateGuildSettingsMutationVariables>(UpdateGuildSettingsDocument, baseOptions);
      }
export type UpdateGuildSettingsMutationHookResult = ReturnType<typeof useUpdateGuildSettingsMutation>;
export type UpdateGuildSettingsMutationResult = Apollo.MutationResult<UpdateGuildSettingsMutation>;
export type UpdateGuildSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateGuildSettingsMutation, UpdateGuildSettingsMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  userLogout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
export const GuildDocument = gql`
    query guild($guild_id: String!) {
  guild(guild_id: $guild_id) {
    id
    guild_id
    type
    prefix
    guild_name
    guild_icon
    roles {
      id
      name
    }
    files {
      id
    }
    owner
  }
}
    `;

/**
 * __useGuildQuery__
 *
 * To run a query within a React component, call `useGuildQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuildQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuildQuery({
 *   variables: {
 *      guild_id: // value for 'guild_id'
 *   },
 * });
 */
export function useGuildQuery(baseOptions: Apollo.QueryHookOptions<GuildQuery, GuildQueryVariables>) {
        return Apollo.useQuery<GuildQuery, GuildQueryVariables>(GuildDocument, baseOptions);
      }
export function useGuildLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuildQuery, GuildQueryVariables>) {
          return Apollo.useLazyQuery<GuildQuery, GuildQueryVariables>(GuildDocument, baseOptions);
        }
export type GuildQueryHookResult = ReturnType<typeof useGuildQuery>;
export type GuildLazyQueryHookResult = ReturnType<typeof useGuildLazyQuery>;
export type GuildQueryResult = Apollo.QueryResult<GuildQuery, GuildQueryVariables>;
export const GuildRolesDocument = gql`
    query guildRoles($guild_id: String!) {
  guildRoles(guild_id: $guild_id) {
    id
    name
  }
}
    `;

/**
 * __useGuildRolesQuery__
 *
 * To run a query within a React component, call `useGuildRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuildRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuildRolesQuery({
 *   variables: {
 *      guild_id: // value for 'guild_id'
 *   },
 * });
 */
export function useGuildRolesQuery(baseOptions: Apollo.QueryHookOptions<GuildRolesQuery, GuildRolesQueryVariables>) {
        return Apollo.useQuery<GuildRolesQuery, GuildRolesQueryVariables>(GuildRolesDocument, baseOptions);
      }
export function useGuildRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuildRolesQuery, GuildRolesQueryVariables>) {
          return Apollo.useLazyQuery<GuildRolesQuery, GuildRolesQueryVariables>(GuildRolesDocument, baseOptions);
        }
export type GuildRolesQueryHookResult = ReturnType<typeof useGuildRolesQuery>;
export type GuildRolesLazyQueryHookResult = ReturnType<typeof useGuildRolesLazyQuery>;
export type GuildRolesQueryResult = Apollo.QueryResult<GuildRolesQuery, GuildRolesQueryVariables>;
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
export const GetUserDocument = gql`
    query getUser {
  user {
    id
    username
    avatar
    email
    accessToken
    guilds {
      id
      name
      icon
      owner
      permissions
      features
      permissions_new
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
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