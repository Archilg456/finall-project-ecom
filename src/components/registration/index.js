import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
  return (
    <>
      <RegisterForm />

      <Link to="/login"> Alredy Have An Account </Link>
    </>
  );
};
