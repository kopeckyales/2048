import { Button, Fade, Grid, Typography } from "@mui/material";

type Props = {
  onNewGame: () => void;
};

export const GameOverOverlay: React.FC<Props> = ({ onNewGame }) => {
  return (
    <Fade in>
      <Grid
        container
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <Grid item>
          <Typography variant="h3" fontWeight="bold" color="white">
            Game over!
          </Typography>
        </Grid>
        <Grid item marginTop={6}>
          <Button variant="contained" color="secondary" size="large" onClick={onNewGame}>
            Try again
          </Button>
        </Grid>
      </Grid>
    </Fade>
  );
};
