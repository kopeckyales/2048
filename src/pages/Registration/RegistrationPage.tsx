import { Button, DialogTitle, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../components/Login/hooks/useLogin";
import { PageLayout } from "../../components/PageLayout";
import { useAuthContext } from "../../context/auth/useAuthContext";
import { useRegisterUser } from "./hooks/useRegisterUser";
import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
});

export const RegistrationPage: React.FC = () => {
  const { setAuth } = useAuthContext();
  const { register } = useRegisterUser();
  const { login } = useLogin();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async ({ name, email, password }, { setErrors }) => {
      try {
        await register(name, email, password);
        const result = await login(email, password);
        // explicit casting is not good, bad gql schema?
        setAuth({
          token: result.authenticateUserWithPassword?.token as string,
          user: {
            id: result.authenticateUserWithPassword?.item?.id as string,
            name: result.authenticateUserWithPassword?.item?.name as string,
          },
        });
        navigate("/");
      } catch (e) {
        if (e instanceof Error) {
          setErrors({ password: e.message });
        }
      }
    },
  });

  return (
    <PageLayout>
      <Grid padding={6} sx={(theme) => ({ border: `1px solid ${theme.palette.background.paper}` })}>
        <DialogTitle>Sign up for a free account</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} padding={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Full name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Create password"
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
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </PageLayout>
  );
};
