import { getEmptyMatrix } from "./getEmptyMatrix";

test("empty matrix has correct size", () => {
  const matrix = getEmptyMatrix();
  expect(matrix.length).toBe(4);
  expect(matrix[0].length).toBe(4);
  expect(matrix[1].length).toBe(4);
  expect(matrix[2].length).toBe(4);
  expect(matrix[3].length).toBe(4);
});
