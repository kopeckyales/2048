import { Button, Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { addRandomTile } from "../functions/addRandomTile";
import { getEmptyMatrix } from "../functions/getEmptyMatrix";
import { move, MoveDirection, CellContent } from "../functions/move";
import { canMove } from "../functions/move/move";
import { BoardState, RenderTile } from "../types";
import { BoardContainer } from "./BoardContainer";
import { GameOverOverlay } from "./GameOverOverlay";
import { ScoreWidget } from "./ScoreWidget";
import { Tile } from "./Tile";
import { WinOverlay } from "./WinOverlay";

let nextId = 0;

export function getNewGameBoardState(): BoardState {
  const emptyMatrix = getEmptyMatrix();
  addRandomTile(emptyMatrix, nextId++);
  addRandomTile(emptyMatrix, nextId++);
  return {
    current: emptyMatrix,
    removed: getEmptyMatrix(),
    score: 0,
    lastScoreAddition: 0,
    hasAvailableMove: true,
    hasWon: false,
  };
}

const acceptedArrowKeyCodes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"] as const;
type ArrowKeyCode = (typeof acceptedArrowKeyCodes)[number];

const keyCodeToMoveDirectionMap: Record<ArrowKeyCode, MoveDirection> = {
  ArrowDown: "Down",
  ArrowLeft: "Left",
  ArrowRight: "Right",
  ArrowUp: "Up",
};

function matrixCellToRenderTile(cell: CellContent, removed: boolean, row: number, column: number): RenderTile | null {
  if (cell === null) {
    return null;
  }
  return {
    ...cell,
    removed,
    column,
    row,
  };
}

type Props = {
  topScore: number | null;
  reportTopScore: (score: number) => void;
};

export const Board: React.FC<Props> = ({ topScore, reportTopScore }) => {
  const [boardState, setBoardState] = useState<BoardState>(getNewGameBoardState);
  const [winScreenDismissed, setWinScreenDismissed] = useState(false);

  const restartGame = useCallback(() => {
    setBoardState(getNewGameBoardState());
    setWinScreenDismissed(false);
  }, []);

  const renderTiles = useMemo(() => {
    const tilesToRender = [
      ...boardState.current.flatMap((r, rI) => r.map((c, cI) => matrixCellToRenderTile(c, false, rI, cI))),
      ...boardState.removed.flatMap((r, rI) => r.map((c, cI) => matrixCellToRenderTile(c, true, rI, cI))),
    ].filter((x) => x !== null) as RenderTile[];

    return tilesToRender.sort((a, b) => a.id - b.id);
  }, [boardState]);

  const doMove = useCallback(
    (direction: MoveDirection) => {
      const moveResult = move(boardState.current, direction);
      if (!moveResult.hasMoved) {
        return;
      }
      addRandomTile(moveResult.current, nextId++);

      const newScore = boardState.score + moveResult.scoreAddition;
      const isGameOver = !canMove(moveResult.current);

      if (isGameOver) {
        reportTopScore(newScore);
      }

      setBoardState({
        current: moveResult.current,
        removed: moveResult.removed,
        score: newScore,
        lastScoreAddition: moveResult.scoreAddition,
        hasAvailableMove: !isGameOver,
        hasWon: boardState.hasWon || moveResult.current.some((x) => x.some((y) => (y?.exponent || 0) > 10)),
      });
    },
    [boardState, reportTopScore]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (acceptedArrowKeyCodes.includes(event.code as ArrowKeyCode)) {
        doMove(keyCodeToMoveDirectionMap[event.code as ArrowKeyCode]);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <>
      <Grid container justifyContent="center" alignItems="stretch">
        <Grid item>
          <ScoreWidget title="SCORE" score={boardState.score} scoreAddition={boardState.lastScoreAddition} />
        </Grid>
        <Grid item>
          <ScoreWidget title="BEST" score={Math.max(boardState.score, topScore || 0)} />
        </Grid>
      </Grid>
      <BoardContainer onSwipe={doMove}>
        {renderTiles.map((data) => data !== null && <Tile key={data.id} data={data} />)}
        {!boardState.hasAvailableMove && <GameOverOverlay onNewGame={restartGame} />}
        {boardState.hasWon && !winScreenDismissed && <WinOverlay onContinue={() => setWinScreenDismissed(true)} />}
      </BoardContainer>
      <Grid container justifyContent="center" spacing={3} marginTop={4} marginBottom={4}>
        <Grid item>
          <NavLink to="/">
            <Button variant="contained" color="secondary" size="large">
              Back to leaderboard
            </Button>
          </NavLink>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" onClick={restartGame}>
            New game
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
