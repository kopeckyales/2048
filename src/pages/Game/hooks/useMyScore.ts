import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useGQLContext } from "../../../context/gql/useGQLContext";
import { graphql } from "../../../gql";

const myTopScoreQueryDocument = graphql(`
  query myTopScore {
    allScores(where: { player: { id: 340 } }, sortBy: score_DESC, first: 1) {
      score
    }
  }
`);

export const useMyTopScore = () => {
  const { client } = useGQLContext();
  const { data, isLoading } = useQuery(["myTopScore"], () => client.request(myTopScoreQueryDocument));
  return {
    isLoading,
    score: data?.allScores?.[0]?.score || null,
  };
};

const reportScoreMutationDocument = graphql(`
  mutation reportScore($score: Int!) {
    createScore(data: { score: $score }) {
      id
    }
  }
`);

export const useReportScore = () => {
  const { client } = useGQLContext();
  const reportScore = useCallback(
    async (score: number) => {
      try {
        const result = await client.request(reportScoreMutationDocument, {
          score,
        });
        return result;
      } catch (e) {
        //log error to sentry
      }
    },
    [client]
  );
  return {
    reportScore,
  };
};
