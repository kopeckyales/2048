/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  JSON: any;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum Direction {
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
  Up = 'Up'
}

export type Game = {
  __typename?: 'Game';
  finished: Scalars['Boolean'];
  score: Scalars['Int'];
  state: Array<Array<Scalars['Int']>>;
};

export type GameInput = {
  direction: Direction;
  score: Scalars['Int'];
  state: Array<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  createScore?: Maybe<Score>;
  createScores?: Maybe<Array<Maybe<Score>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteScore?: Maybe<Score>;
  deleteScores?: Maybe<Array<Maybe<Score>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  processGame?: Maybe<Game>;
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
  updateAuthenticatedUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationCreateScoreArgs = {
  data?: InputMaybe<ScoreCreateInput>;
};


export type MutationCreateScoresArgs = {
  data?: InputMaybe<Array<InputMaybe<ScoresCreateInput>>>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};


export type MutationDeleteScoreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteScoresArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationProcessGameArgs = {
  game: GameInput;
};


export type MutationUpdateAuthenticatedUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export type Query = {
  __typename?: 'Query';
  Score?: Maybe<Score>;
  User?: Maybe<User>;
  _ScoresMeta?: Maybe<_ListMeta>;
  _UsersMeta?: Maybe<_ListMeta>;
  _allScoresMeta?: Maybe<_QueryMeta>;
  _allUsersMeta?: Maybe<_QueryMeta>;
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  allScores?: Maybe<Array<Maybe<Score>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<User>;
  newGame?: Maybe<Game>;
};


export type QueryScoreArgs = {
  where: ScoreWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllScoresMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy>>;
  where?: InputMaybe<ScoreWhereInput>;
};


export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};


export type QueryAllScoresArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy>>;
  where?: InputMaybe<ScoreWhereInput>;
};


export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Score = {
  __typename?: 'Score';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  player?: Maybe<User>;
  score?: Maybe<Scalars['Int']>;
};

export type ScoreCreateInput = {
  score?: InputMaybe<Scalars['Int']>;
};

export type ScoreWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ScoreWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ScoreWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  player?: InputMaybe<UserWhereInput>;
  player_is_null?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  score_gt?: InputMaybe<Scalars['Int']>;
  score_gte?: InputMaybe<Scalars['Int']>;
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  score_lt?: InputMaybe<Scalars['Int']>;
  score_lte?: InputMaybe<Scalars['Int']>;
  score_not?: InputMaybe<Scalars['Int']>;
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ScoreWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ScoresCreateInput = {
  data?: InputMaybe<ScoreCreateInput>;
};

export enum SortScoresBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PlayerAsc = 'player_ASC',
  PlayerDesc = 'player_DESC',
  ScoreAsc = 'score_ASC',
  ScoreDesc = 'score_DESC'
}

export enum SortUsersBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type User = {
  __typename?: 'User';
  _label_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isAdmin_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  password_is_set?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  auth?: Maybe<Scalars['JSON']>;
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['JSON']>;
  read?: Maybe<Scalars['JSON']>;
  update?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  createInput?: Maybe<Scalars['String']>;
  createManyInput?: Maybe<Scalars['String']>;
  updateInput?: Maybe<Scalars['String']>;
  updateManyInput?: Maybe<Scalars['String']>;
  whereInput?: Maybe<Scalars['String']>;
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  access?: Maybe<_ListAccess>;
  description?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** @deprecated Use `key` instead */
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  schema?: Maybe<_ListSchema>;
  singular?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  create?: Maybe<Scalars['String']>;
  createMany?: Maybe<Scalars['String']>;
  delete?: Maybe<Scalars['String']>;
  deleteMany?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  updateMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  item?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  inputTypes?: Maybe<_ListInputTypes>;
  mutations?: Maybe<_ListMutations>;
  queries?: Maybe<_ListQueries>;
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  type?: Maybe<Scalars['String']>;
};


export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** @deprecated Use `path` instead */
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  auxiliary?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

export type AuthenticateUserOutput = {
  __typename?: 'authenticateUserOutput';
  item?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type UnauthenticateUserOutput = {
  __typename?: 'unauthenticateUserOutput';
  success?: Maybe<Scalars['Boolean']>;
};

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'authenticateUserOutput', token?: string | null, item?: { __typename?: 'User', id?: string | null, name?: string | null } | null } | null };

export type MyTopScoreQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTopScoreQuery = { __typename?: 'Query', allScores?: Array<{ __typename?: 'Score', score?: number | null } | null> | null };

export type ReportScoreMutationVariables = Exact<{
  score: Scalars['Int'];
}>;


export type ReportScoreMutation = { __typename?: 'Mutation', createScore?: { __typename?: 'Score', id?: string | null } | null };

export type Top10ScoreQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Top10ScoreQueryQuery = { __typename?: 'Query', allScores?: Array<{ __typename?: 'Score', id?: string | null, score?: number | null, player?: { __typename?: 'User', name?: string | null } | null } | null> | null };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null } | null };


export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"authenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const MyTopScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myTopScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allScores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"player"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"340"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"score_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<MyTopScoreQuery, MyTopScoreQueryVariables>;
export const ReportScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"reportScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"score"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ReportScoreMutation, ReportScoreMutationVariables>;
export const Top10ScoreQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"top10ScoreQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allScores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"score_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Top10ScoreQueryQuery, Top10ScoreQueryQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;