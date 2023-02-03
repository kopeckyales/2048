import { ClientError } from "graphql-request";
import { useCallback } from "react";
import { useGQLContext } from "../../../context/gql/useGQLContext";
import { graphql } from "../../../gql";

const authenticateUserWithPasswordMutationDocument = graphql(`
  mutation authenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        id
        name
      }
    }
  }
`);

export const useLogin = () => {
  const { client } = useGQLContext();
  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const result = await client.request(authenticateUserWithPasswordMutationDocument, {
          email,
          password,
        });
        return result;
      } catch (e) {
        if (e instanceof ClientError) {
          throw new Error(e.response.errors?.[0].message);
        }
        //log error to sentry
        throw new Error("unknown error");
      }
    },
    [client]
  );
  return {
    login,
  };
};
