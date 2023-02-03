import { styled } from "@mui/material";
import React from "react";
import { useSwipeable } from "react-swipeable";
import { MoveDirection } from "../functions/move";

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  columnGap: "16px",
  rowGap: "16px",
  backgroundColor: theme.palette.background.paper,
  width: "600px",
  aspectRatio: "1/1",
  padding: "16px",
  borderRadius: "4px",
  position: "relative",
  boxSizing: "border-box",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    columnGap: "8px",
    rowGap: "8px",
    padding: "8px",
  },
}));

const BoardCell = styled("div")(() => ({
  backgroundColor: "rgba(255,255,255,0.6)",
  aspectRatio: "1/1",
  borderRadius: "4px",
}));

type Props = {
  children: React.ReactNode;
  onSwipe: (direction: MoveDirection) => void;
};

export const BoardContainer: React.FC<Props> = ({ children, onSwipe }) => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => onSwipe(eventData.dir),
    delta: 50,
    preventScrollOnSwipe: true,
    touchEventOptions: { passive: true },
  });
  return (
    <Container {...handlers}>
      <Cells />
      {children}
    </Container>
  );
};

export const Cells: React.FC = React.memo(function Cells() {
  return (
    <React.Fragment>
      {Array.from(Array(16).keys()).map((x) => (
        <BoardCell key={`${Math.floor(x / 4)}_${x % 4}`} />
      ))}
    </React.Fragment>
  );
});
