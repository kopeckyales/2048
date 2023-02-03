export type FourOfA<T> = [T, T, T, T];

export type Tile = {
  id: number;
  exponent: number;
};
export type TileWithMergeFlag = Tile & {
  merged: boolean;
};
export type CellContent = Tile | null;
export type CellContentWithMergeFlag = TileWithMergeFlag | null;

export type Row = FourOfA<CellContent>;
export type Matrix = FourOfA<Row>;

export type RotationAngle = 0 | 90 | 180 | 270;
export type MoveDirection = "Up" | "Right" | "Left" | "Down";

export type MoveRowResult = {
  current: Row;
  removed: Row;
  scoreAddition: number;
  hasMoved: boolean;
};

export type MoveResult = {
  current: Matrix;
  removed: Matrix;
  scoreAddition: number;
  hasMoved: boolean;
};
