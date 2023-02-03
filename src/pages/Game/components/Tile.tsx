import React from "react";
import { RenderTile } from "../types";
import { clsx } from "clsx";

type Props = {
  data: RenderTile;
};

export const Tile: React.FC<Props> = React.memo(function Tile({ data }) {
  return (
    <div
      className={clsx(
        "tile",
        data.exponent > 11 && "tile__extra",
        `tile__${Math.pow(2, data.exponent)}`,
        `tile__column-${data.column}`,
        `tile__row-${data.row}`,
        data.removed && "tile__removed"
      )}
    >
      {Math.pow(2, data.exponent)}
    </div>
  );
});
