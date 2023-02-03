import { Matrix } from "./move";

export function addRandomTile(matrix: Matrix, id: number) {
  const emptyPlaces: { row: number; column: number }[] = [];
  matrix.forEach((row, rowIndex) =>
    row.forEach((column, columnIndex) => {
      if (column === null) {
        emptyPlaces.push({ row: rowIndex, column: columnIndex });
      }
    })
  );
  if (emptyPlaces.length === 0) {
    return;
  }
  const randomEmptyPlaceIndex = Math.floor(Math.random() * (emptyPlaces.length - 1));
  matrix[emptyPlaces[randomEmptyPlaceIndex].row][emptyPlaces[randomEmptyPlaceIndex].column] = {
    id,
    exponent: Math.random() > 0.9 ? 2 : 1,
  };
}
