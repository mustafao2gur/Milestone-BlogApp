import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";

import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import useAuthCalls from "../hooks/useAuthCalls";
// import image from "../assets/learning-and-5.png";

// import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
    const { register } = useAuthCalls();

  return (
    <Container
      maxWidth="lg"
      sx={{
        // height: "88vh",
        m: "2rem",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/auth">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Container>
            {/* <img src={image} alt="" width={400} height={290} /> */}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
