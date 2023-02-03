import { Box, Skeleton, List, ListItem, Typography, ListItemText, ListItemAvatar, styled } from "@mui/material";
import { useLeaderboardScore } from "../hooks/useLeaderboardScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Position = styled(ListItemAvatar)({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const colorMap: Record<number, string> = {
  0: "#FFD700",
  1: "#C0C0C0",
  2: "#CD7F32",
};

export const LeaderBoardTable: React.FC = () => {
  const { isLoading, score } = useLeaderboardScore();

  console.log(isLoading, score);

  if (isLoading) {
    return (
      <Box>
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={48} sx={{ margin: "16px" }} />
        ))}
      </Box>
    );
  }
  return (
    <List>
      {score?.map((scoreEntry, index) => (
        <ListItem
          sx={(theme) => ({
            backgroundColor: index % 2 ? theme.palette.background.paper : theme.palette.background.default,
          })}
          key={scoreEntry?.id}
          // there is a null value for the first row score from the API, so I guess someone is a hackerman :D
          secondaryAction={
            <Typography variant="body1">
              {scoreEntry?.score ? new Intl.NumberFormat().format(scoreEntry.score) : "HACKERMAN"}
            </Typography>
          }
        >
          <Position>
            {index < 3 ? (
              <WorkspacePremiumIcon fontSize="large" htmlColor={colorMap[index]} />
            ) : (
              <Typography fontSize="large">{index + 1}</Typography>
            )}
          </Position>
          <ListItemText primary={scoreEntry?.player?.name} />
        </ListItem>
      ))}
    </List>
  );
};
