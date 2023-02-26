import React from "react";
import { useForm } from "../../applications";
import { generateRegisterFormValue } from "./generateRegisterFormValue";

export const RegisterForm = () => {
  let {} = useForm({ defaultFormValue: generateRegisterFormValue() });
  return <div>RegisterForm</div>;
};
