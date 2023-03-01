import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../applications";
import { authenticateUser } from "../../redux/slices/userSlice";
import { generateLoginFormValues } from "./generateLoginFormValues";
import "../../App.css";

export const Loginform = () => {
  const { formValues: loginFormValues, onIpuntChange: onLoginInputChange } =
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
    <FormControl>
      <TextField
        variant="outlined"
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onLoginInputChange}
        error={!!loginFormValues.email.error}
        helperText={loginFormValues.email.error}
      />
      <TextField
        variant="outlined"
        name="password"
        label="password"
        type={"password"}
        value={loginFormValues.password.value}
        onChange={onLoginInputChange}
        error={!!loginFormValues.password.error}
        helperText={loginFormValues.password.error}
      />
      <button onClick={onLogin}>Log In</button>
    </FormControl>
  );
};
