import { MoveRowResult, Row, Tile } from "./types";
import { moveRow } from "./move";

function createTile(id: number, exponent = 1): Tile {
  return {
    exponent,
    id,
  };
}

function createMoveRowResult(
  current: Row,
  removed: Row = [null, null, null, null],
  scoreAddition = 0,
  hasMoved = true
): MoveRowResult {
  return {
    current,
    removed: removed,
    scoreAddition,
    hasMoved,
  };
}

describe("move row", () => {
  it("is immutable", () => {
    const tile = createTile(1);
    const output = moveRow([tile, null, null, null]);
    expect(output.current[0]).not.toBe(tile);
    expect(output.current[0]).toEqual(tile);
  });
  describe("no action", () => {
    const data: [Row, MoveRowResult][] = [
      [[null, null, null, null], createMoveRowResult([null, null, null, null], undefined, undefined, false)],
      [
        [createTile(1), null, null, null],
        createMoveRowResult([createTile(1), null, null, null], undefined, undefined, false),
      ],
      [
        [createTile(1, 1), createTile(2, 2), null, null],
        createMoveRowResult([createTile(1, 1), createTile(2, 2), null, null], undefined, undefined, false),
      ],
      [
        [createTile(1, 1), createTile(2, 2), createTile(3, 1), null],
        createMoveRowResult([createTile(1, 1), createTile(2, 2), createTile(3, 1), null], undefined, undefined, false),
      ],
      [
        [createTile(1, 1), createTile(2, 2), createTile(3, 1), createTile(4, 2)],
        createMoveRowResult(
          [createTile(1, 1), createTile(2, 2), createTile(3, 1), createTile(4, 2)],
          undefined,
          undefined,
          false
        ),
      ],
    ];
    it.each(data)("does no move on row (%j)", (input, output) => {
      expect(moveRow(input)).toEqual(output);
    });
  });
  describe("move action", () => {
    const data: [Row, MoveRowResult][] = [
      [[null, createTile(1), null, null], createMoveRowResult([createTile(1), null, null, null])],
      [[null, null, createTile(1), null], createMoveRowResult([createTile(1), null, null, null])],
      [[null, null, null, createTile(1)], createMoveRowResult([createTile(1), null, null, null])],
      [
        [createTile(1), null, createTile(2, 2), null],
        createMoveRowResult([createTile(1), createTile(2, 2), null, null]),
      ],
      [
        [createTile(1), null, null, createTile(2, 2)],
        createMoveRowResult([createTile(1), createTile(2, 2), null, null]),
      ],
      [
        [createTile(1), createTile(2, 2), null, createTile(3, 1)],
        createMoveRowResult([createTile(1), createTile(2, 2), createTile(3, 1), null]),
      ],
      [
        [createTile(1), null, createTile(2, 2), createTile(3, 1)],
        createMoveRowResult([createTile(1), createTile(2, 2), createTile(3, 1), null]),
      ],
    ];
    it.each(data)("does move on row (%j) to (%j)", (input, output) => {
      expect(moveRow(input)).toEqual(output);
    });
  });
  describe("merge action", () => {
    const data: [Row, MoveRowResult][] = [
      [
        [null, createTile(1), createTile(2), null],
        createMoveRowResult([createTile(1, 2), null, null, null], [createTile(2), null, null, null], 4),
      ],
      [
        [createTile(1), null, null, createTile(2)],
        createMoveRowResult([createTile(1, 2), null, null, null], [createTile(2), null, null, null], 4),
      ],
      [
        [createTile(1), createTile(2), createTile(3, 2), createTile(4, 2)],
        createMoveRowResult(
          [createTile(1, 2), createTile(3, 3), null, null],
          [createTile(2), createTile(4, 2), null, null],
          12
        ),
      ],
      [
        [createTile(1, 2), createTile(2), createTile(3), null],
        createMoveRowResult([createTile(1, 2), createTile(2, 2), null, null], [null, createTile(3), null, null], 4),
      ],
      [
        [null, createTile(1), createTile(2), createTile(3, 2)],
        createMoveRowResult([createTile(1, 2), createTile(3, 2), null, null], [createTile(2), null, null, null], 4),
      ],
      [
        [createTile(1, 4), createTile(2, 3), createTile(3, 2), createTile(4, 2)],
        createMoveRowResult(
          [createTile(1, 4), createTile(2, 3), createTile(3, 3), null],
          [null, null, createTile(4, 2), null],
          8
        ),
      ],
    ];
    it.each(data)("does merge on row (%j) to (%j)", (input, output) => {
      const result = moveRow(input);
      expect(result).toEqual(output);
    });
  });
});
