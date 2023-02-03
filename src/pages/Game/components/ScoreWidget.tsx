import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  score: number;
  scoreAddition?: number;
};

export const ScoreWidget: React.FC<Props> = React.memo(function ScoreWidget({ title, score, scoreAddition }) {
  return (
    <Grid
      position="relative"
      container
      direction="column"
      padding={[4, 6]}
      alignItems="center"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Grid item>
        <Typography variant="body1">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{score}</Typography>
      </Grid>
      {scoreAddition !== undefined && scoreAddition !== 0 && (
        <Typography
          variant="h6"
          key={`${score}_%{scoreAddition}`}
          sx={(theme) => ({
            position: "absolute",
            bottom: [theme.spacing(4), theme.spacing(6)],
            right: theme.spacing(1),
            opacity: 0,
            animation: "fadeIn 1s ease",
          })}
        >
          +{scoreAddition}
        </Typography>
      )}
    </Grid>
  );
});
