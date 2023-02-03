import "./App.css";
import { LeaderboardPage } from "./pages/Leaderboard/LeaderBoardPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { GQLClientProvider } from "./context/gql/gqlContext";
import { GraphQLClient } from "graphql-request";
import { AuthContextProvider } from "./context/auth/authContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/Registration/RegistrationPage";
import { GamePage } from "./pages/Game/GamePage";

const queryClient = new QueryClient();
const gqlClient = new GraphQLClient(import.meta.env.VITE_GQL_URL);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <GQLClientProvider client={gqlClient}>
            <MemoryRouter>
              <Routes>
                <Route path="/" element={<LeaderboardPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/game" element={<GamePage />} />
              </Routes>
            </MemoryRouter>
          </GQLClientProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
