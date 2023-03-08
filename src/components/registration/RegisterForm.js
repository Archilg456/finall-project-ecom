import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../applications";
import { authenticateUser } from "../../redux";
import { generateRegistrationFormValue } from "./generateRegistrationFormValue";

export const RegisterForm = () => {
  const {
    formValues: registerFormValue,
    onIpuntChange: onRegisterInputChange,
  } = useForm({
    defaultFormValues: generateRegistrationFormValue(),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = () => {
    const firstName = registerFormValue.firstName.value;
    const lastName = registerFormValue.lastName.value;
    const email = registerFormValue.email.value;
    const password = registerFormValue.password.value;
    dispatch(
      authenticateUser({
        isLogin: false,
        formValues: {
          firstName,
          lastName,
          email,
          password,
        },
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {});
  };

  return (
    <FormControl>
      <TextField
        variant="outlined"
        name="firstName"
        label="firstName"
        value={registerFormValue.firstName.value}
        onChange={onRegisterInputChange}
        error={!!registerFormValue.firstName.error}
        helperText={registerFormValue.firstName.error}
      />
      <TextField
        variant="outlined"
        name="lastName"
        label="lastName"
        value={registerFormValue.lastName.value}
        onChange={onRegisterInputChange}
        error={!!registerFormValue.lastName.error}
        helperText={registerFormValue.lastName.error}
      />
      <TextField
        variant="outlined"
        name="email"
        label="email"
        value={registerFormValue.email.value}
        onChange={onRegisterInputChange}
        error={!!registerFormValue.email.error}
        helperText={registerFormValue.email.error}
      />
      <TextField
        variant="outlined"
        name="password"
        label="password"
        type={"password"}
        value={registerFormValue.password.value}
        onChange={onRegisterInputChange}
        error={!!registerFormValue.password.error}
        helperText={registerFormValue.password.error}
      />

      <button onClick={onRegister}> Registration</button>
    </FormControl>
  );
};
