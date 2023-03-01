import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../applications";
import { generateLoginFormValues } from "./generateLoginFormValues";

export const Loginform = () => {
  const { formValues: loginFormValues, onIpuntChange: onLoginInputChange } =
    useForm({ defaultFormValues: generateLoginFormValues() });

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
        value={loginFormValues.password.value}
        onChange={onLoginInputChange}
        error={!!loginFormValues.password.error}
        helperText={loginFormValues.password.error}
      />
  <button>Log In</button>

    </FormControl>
  );
};
