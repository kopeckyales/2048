import { addMergeFlag, rotateClockwise, stripMergeFlag } from "./prepareData";
import {
  CellContentWithMergeFlag,
  FourOfA,
  Matrix,
  MoveDirection,
  MoveResult,
  MoveRowResult,
  RotationAngle,
  Row,
  Tile,
} from "./types";

function moveAction(item: CellContentWithMergeFlag, previous: CellContentWithMergeFlag | undefined) {
  if (item === null || previous === undefined) {
    return "no";
  }
  if (previous === null) {
    return "move";
  }
  if (previous.exponent === item.exponent && !previous.merged) {
    return "merge";
  }
  return "no";
}

export function moveRow(rowInput: Row): MoveRowResult {
  const row = rowInput.map(addMergeFlag);
  const removedTiles: FourOfA<CellContentWithMergeFlag> = [null, null, null, null];
  let hasMoved = false;
  let scoreAddition = 0;
  for (let i = 1; i < row.length; i++) {
    let ci = i;
    let nextMove = moveAction(row[i], row[i - 1]);
    while (nextMove !== "no") {
      if (nextMove === "move") {
        hasMoved = true;
        row[ci - 1] = row[ci];
        row[ci] = null;
      }
      if (nextMove === "merge") {
        hasMoved = true;
        const previousRow = row[ci - 1] as Tile;
        row[ci - 1] = {
          ...previousRow,
          merged: true,
          exponent: previousRow.exponent + 1,
        };
        removedTiles[ci - 1] = row[ci];
        row[ci] = null;
        scoreAddition += Math.pow(2, previousRow.exponent + 1);
        break;
      }
      ci--;
      nextMove = moveAction(row[ci], row[ci - 1]);
    }
  }
  return {
    current: row.map(stripMergeFlag) as Row,
    removed: removedTiles.map(stripMergeFlag) as Row,
    scoreAddition,
    hasMoved,
  };
}

const directionRotationMap: Record<MoveDirection, RotationAngle> = {
  Left: 0,
  Up: 90,
  Right: 180,
  Down: 270,
};

export function move(matrix: Matrix, direction: MoveDirection): MoveResult {
  const rotated = rotateClockwise(matrix, directionRotationMap[direction]);
  const moved = rotated.map(moveRow);
  const newMatrix = moved.map((x) => x.current) as Matrix;
  const removedMatrix = moved.map((x) => x.removed) as Matrix;
  const scoreAddition = moved.reduce((sum, x) => sum + x.scoreAddition, 0);

  return {
    current: rotateClockwise(newMatrix, (360 - directionRotationMap[direction]) as RotationAngle),
    removed: rotateClockwise(removedMatrix, (360 - directionRotationMap[direction]) as RotationAngle),
    scoreAddition,
    hasMoved: moved.some((x) => x.hasMoved),
  };
}

export function canMove(matrix: Matrix): boolean {
  for (const direction of Object.values(directionRotationMap)) {
    const rotated = rotateClockwise(matrix, direction);
    const moved = rotated.map(moveRow);
    if (moved.some((x) => x.hasMoved)) {
      return true;
    }
  }
  return false;
}
