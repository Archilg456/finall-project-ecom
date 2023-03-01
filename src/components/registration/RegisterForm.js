import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../applications";
import { generateRegFormValues } from "./generateRegFormValues";

export const RegisterForm = () => {
  const {
    formValues: registerFormValue,
    onIpuntChange: onRegisterInputChange,
  } = useForm({
    defaultregisterFormValue: generateRegFormValues(),
  });

  return (
    <FormControl>
      <TextField
        variant="outlined"
        name="firstName"
        label="firstName"
        value={registerFormValue.firsName.value}
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
        value={registerFormValue.password.value}
        onChange={onRegisterInputChange}
        error={!!registerFormValue.password.error}
        helperText={registerFormValue.password.error}
      />


    </FormControl>
  );
};
