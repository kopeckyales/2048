/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation authenticateUserWithPassword($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n      item {\n        id\n        name\n      }\n    }\n  }\n": types.AuthenticateUserWithPasswordDocument,
    "\n  query myTopScore {\n    allScores(where: { player: { id: 340 } }, sortBy: score_DESC, first: 1) {\n      score\n    }\n  }\n": types.MyTopScoreDocument,
    "\n  mutation reportScore($score: Int!) {\n    createScore(data: { score: $score }) {\n      id\n    }\n  }\n": types.ReportScoreDocument,
    "\n  query top10ScoreQuery {\n    allScores(sortBy: score_DESC, first: 10) {\n      id\n      score\n      player {\n        name\n      }\n    }\n  }\n": types.Top10ScoreQueryDocument,
    "\n  mutation createUser($name: String!, $email: String!, $password: String!) {\n    createUser(data: { name: $name, email: $email, password: $password }) {\n      id\n    }\n  }\n": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation authenticateUserWithPassword($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n      item {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation authenticateUserWithPassword($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n      item {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query myTopScore {\n    allScores(where: { player: { id: 340 } }, sortBy: score_DESC, first: 1) {\n      score\n    }\n  }\n"): (typeof documents)["\n  query myTopScore {\n    allScores(where: { player: { id: 340 } }, sortBy: score_DESC, first: 1) {\n      score\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation reportScore($score: Int!) {\n    createScore(data: { score: $score }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation reportScore($score: Int!) {\n    createScore(data: { score: $score }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query top10ScoreQuery {\n    allScores(sortBy: score_DESC, first: 10) {\n      id\n      score\n      player {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query top10ScoreQuery {\n    allScores(sortBy: score_DESC, first: 10) {\n      id\n      score\n      player {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($name: String!, $email: String!, $password: String!) {\n    createUser(data: { name: $name, email: $email, password: $password }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($name: String!, $email: String!, $password: String!) {\n    createUser(data: { name: $name, email: $email, password: $password }) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;