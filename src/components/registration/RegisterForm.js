import {
  Box,
  Button,
  FormControl,
  styled,
  TextField,
  Avatar,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../applications";
import { authenticateUser, useProductLoading } from "../../redux";
import { LoadingWrapper } from "../shared";
import { generateRegistrationFormValue } from "./generateRegistrationFormValue";

const StyledRegistrationForm = styled(Box)(() => ({
  display: "grid",
  maxWidth: "100%",
  width: "550px",
  margin: "auto",
  border: "5px",
}));

export const RegisterForm = () => {
  const {
    formValues: registerFormValue,
    onInputChange: onRegisterInputChange,
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

  const isLoading = useProductLoading();
  return (
    <LoadingWrapper isLoading={isLoading}>
      <StyledRegistrationForm>
        <Avatar sx={{ marginLeft: "15rem", background: "#04623E" }} />

        <FormControl>
          <TextField
            sx={{ marginTop: "1rem" }}
            variant="outlined"
            name="firstName"
            label="First Name"
            value={registerFormValue.firstName.value}
            onChange={onRegisterInputChange}
            error={!!registerFormValue.firstName.error}
            helperText={registerFormValue.firstName.error}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            variant="outlined"
            name="lastName"
            label="Last Name"
            value={registerFormValue.lastName.value}
            onChange={onRegisterInputChange}
            error={!!registerFormValue.lastName.error}
            helperText={registerFormValue.lastName.error}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            variant="outlined"
            name="email"
            label="Email"
            value={registerFormValue.email.value}
            onChange={onRegisterInputChange}
            error={!!registerFormValue.email.error}
            helperText={registerFormValue.email.error}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            variant="outlined"
            name="password"
            label="Password"
            type={"password"}
            value={registerFormValue.password.value}
            onChange={onRegisterInputChange}
            error={!!registerFormValue.password.error}
            helperText={registerFormValue.password.error}
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
            onClick={onRegister}
          >
            Registration
          </Button>

          <Link to="/login">
            <Button
              sx={{
                borderRadius: "15px",
                width: "350px",
                margin: "auto",
                marginTop: "2rem",
                marginLeft: "6rem",
                fontSize: "1.2rem",
              }}
              color="success"
            >
              Alredy Have An Account
            </Button>
          </Link>
        </FormControl>
      </StyledRegistrationForm>
    </LoadingWrapper>
  );
};
