import React from "react";
import {useForm} from "../../applications";
import {generateRegisterFormValue} from "./generateRegisterFormValue";

export const RegisterForm = () => {
  const {formvalues:registerFormValue 
        onIpuntChange:onRegisterInputChange} 
        = useForm ({defaultFormValue:generateRegisterFormValue()
         });
  return <div>RegisterForm</div>;
};
  