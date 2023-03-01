import React from "react";
import { Link } from "react-router-dom";
import { Loginform } from "./Loginform";

export const Login = () => {
  return (
    <>
      <Loginform />

      <Link to="/Register"> Don't have an Account</Link>
    </>
  );
};
