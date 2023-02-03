import { Button, Fade, Grid, Typography } from "@mui/material";

type Props = {
  onContinue: () => void;
};

export const WinOverlay: React.FC<Props> = ({ onContinue }) => {
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
        sx={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <Grid item>
          <Typography variant="h3" fontWeight="bold" color="primary">
            You win!
          </Typography>
        </Grid>
        <Grid item marginTop={6}>
          <Button variant="contained" color="secondary" size="large" onClick={onContinue}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </Fade>
  );
};
