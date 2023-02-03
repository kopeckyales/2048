import { Container, Typography } from "@mui/material";

type Props = {
  subtitle?: string;
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children, subtitle }) => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: "64px" }}>
      <Typography variant="h1" textAlign="center" color="secondary">
        2048
      </Typography>
      <Typography variant="h2" textAlign="center">
        {subtitle || <>&nbsp;</>}
      </Typography>
      {children}
    </Container>
  );
};
