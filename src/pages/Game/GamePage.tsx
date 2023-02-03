import { PageLayout } from "../../components/PageLayout";
import { Board } from "./components/Board";
import { useMyTopScore, useReportScore } from "./hooks/useMyScore";

export const GamePage: React.FC = () => {
  const { score } = useMyTopScore();
  const { reportScore } = useReportScore();
  return (
    <PageLayout>
      <Board topScore={score} reportTopScore={reportScore} />
    </PageLayout>
  );
};
