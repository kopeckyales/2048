import { useQuery } from "@tanstack/react-query";
import { useGQLContext } from "../../../context/gql/useGQLContext";
import { graphql } from "../../../gql";

const top10ScoreQueryDocument = graphql(`
  query top10ScoreQuery {
    allScores(sortBy: score_DESC, first: 10) {
      id
      score
      player {
        name
      }
    }
  }
`);

export const useLeaderboardScore = () => {
  const { client } = useGQLContext();
  const { data, isLoading } = useQuery(["allScores"], async () => client.request(top10ScoreQueryDocument));
  return {
    isLoading,
    score: data?.allScores,
  };
};
