import { Matrix, CellContent, RotationAngle, CellContentWithMergeFlag } from "./types";

export function rotateClockwise(matrix: Matrix, angle: RotationAngle): Matrix {
  if (angle === 0) {
    return matrix;
  }
  let source: CellContent[][] = matrix;
  let result: CellContent[][] = [];
  while (angle > 0) {
    result = [];
    for (let row = 0; row < source.length; row++) {
      result.push([]);
      for (let column = 0; column < source.length; column++) {
        result[row][column] = source[column][source.length - 1 - row];
      }
    }
    angle -= 90;
    source = result;
  }
  return result as Matrix;
}

export function addMergeFlag(cell: CellContent): CellContentWithMergeFlag {
  if (cell === null) {
    return null;
  }
  return {
    ...cell,
    merged: false,
  };
}

export function stripMergeFlag(cell: CellContentWithMergeFlag): CellContent {
  if (cell === null) {
    return null;
  }
  return {
    exponent: cell.exponent,
    id: cell.id,
  };
}
