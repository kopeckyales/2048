import { ClientError } from "graphql-request";
import { useCallback } from "react";
import { useGQLContext } from "../../../context/gql/useGQLContext";
import { graphql } from "../../../gql";

const createUserMutationDocument = graphql(`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
    }
  }
`);

export const useRegisterUser = () => {
  const { client } = useGQLContext();
  const register = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        const result = await client.request(createUserMutationDocument, {
          name,
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
    register,
  };
};
