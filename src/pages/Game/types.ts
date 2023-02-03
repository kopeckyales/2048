import { Tile, Matrix } from "./functions/move";

export type RenderTile = Tile & {
  removed: boolean;
  column: number;
  row: number;
};

export type BoardState = {
  current: Matrix;
  removed: Matrix;
  score: number;
  lastScoreAddition: number;
  hasAvailableMove: boolean;
  hasWon: boolean;
};
