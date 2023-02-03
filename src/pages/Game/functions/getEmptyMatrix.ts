import { Matrix } from "./move";

export function getEmptyMatrix(): Matrix {
  return Array(4)
    .fill(0)
    .map(() => Array(4).fill(null)) as Matrix;
}
