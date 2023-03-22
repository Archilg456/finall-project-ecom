import {
  FormControl,
  TextField,
  styled,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../applications";
import { authenticateUser } from "../../redux/slices/userSlice";
import { generateLoginFormValues } from "./generateLoginFormValues";
import "../../App.css";

const StyledloginForm = styled(Box)(() => ({
  display: "grid",
  maxWidth: "100%",
  width: "350px",
  margin: "auto",
  border: "5px",
}));

export const Loginform = () => {
  const { formValues: loginFormValues, onInputChange: onLoginInputChange } =
    useForm({ defaultFormValues: generateLoginFormValues() });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    dispatch(
      authenticateUser({ isLogin: true, formValues: { email, password } })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <StyledloginForm>
      <Avatar sx={{ marginLeft: "9rem", background: "#04623E" }} />

      <FormControl>
        <TextField
          sx={{ marginTop: "1rem" }}
          variant="outlined"
          name="email"
          label="Email"
          value={loginFormValues.email.value}
          onChange={onLoginInputChange}
          error={!!loginFormValues.email.error}
          helperText={loginFormValues.email.error}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          variant="outlined"
          name="password"
          label="Password"
          type={"password"}
          value={loginFormValues.password.value}
          onChange={onLoginInputChange}
          error={!!loginFormValues.password.error}
          helperText={loginFormValues.password.error}
        />
        <Button
          sx={{
            borderRadius: "15px",
            width: "350px",
            margin: "auto",
            marginTop: "2rem",
          }}
          variant="contained"
          color="success"
          onClick={onLogin}
        >
          Log In
        </Button>
        <Link to="/register">
          <Button
            sx={{
              borderRadius: "15px",
              width: "350px",
              margin: "auto",
              marginTop: "2rem",
              fontSize: "1.2rem",
            }}
            color="success"
          >
            Don't have an Account
          </Button>
        </Link>
      </FormControl>
    </StyledloginForm>
  );
};
