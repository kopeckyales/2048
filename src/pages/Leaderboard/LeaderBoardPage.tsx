import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginDialog } from "../../components/Login/LoginDialog";
import { PageLayout } from "../../components/PageLayout";
import { isAuthenticated, useAuthContext } from "../../context/auth/useAuthContext";
import { LeaderBoardTable } from "./components/LeaderBoardTable";

export const LeaderboardPage: React.FC = () => {
  const { auth } = useAuthContext();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  return (
    <PageLayout subtitle="Leaderboard">
      <LeaderBoardTable />
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        rowSpacing={1}
        columnSpacing={2}
        sx={{ padding: "32px" }}
      >
        {isAuthenticated(auth) ? (
          <>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center">
                Hello {auth.user.name}, nice to see you again!
              </Typography>
            </Grid>
            <Grid item>
              <NavLink to="/game">
                <Button size="large" variant="contained" color="primary">
                  New game
                </Button>
              </NavLink>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Button size="large" variant="contained" color="primary" onClick={() => setLoginDialogOpen(true)}>
                Log in
              </Button>
            </Grid>
            <Grid item>
              <NavLink to="/register">
                <Button size="large" variant="contained" color="secondary">
                  Register
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center">
                Login or register to start new game.
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
      <LoginDialog onClose={() => setLoginDialogOpen(false)} open={loginDialogOpen} />
    </PageLayout>
  );
};
