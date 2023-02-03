import { Button, Dialog, DialogTitle, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useAuthContext } from "../../context/auth/useAuthContext";
import { useLogin } from "./hooks/useLogin";

type Props = {
  onClose: () => void;
  open: boolean;
};

export const LoginDialog: React.FC<Props> = ({ onClose, open }) => {
  const { login } = useLogin();
  const { setAuth } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }, { setErrors }) => {
      try {
        const result = await login(email, password);
        //explicit casting is not good, bad gql schema?
        setAuth({
          token: result.authenticateUserWithPassword?.token as string,
          user: {
            id: result.authenticateUserWithPassword?.item?.id as string,
            name: result.authenticateUserWithPassword?.item?.name as string,
          },
        });
        onClose();
      } catch (e) {
        if (e instanceof Error) {
          setErrors({ password: e.message });
        }
      }
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.password)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="center" marginTop={4}>
            <Button type="submit" disabled={formik.isSubmitting} size="large" color="primary" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};
