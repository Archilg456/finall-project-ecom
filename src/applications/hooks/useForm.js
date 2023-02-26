import { useState } from "react";

export let useForm = ({ defaultFormValue }) => {
  let [formvalues, setFormValues] = useState(defaultFormValue);
  let onIpuntChange = (e) => {
    let inputName = e.target.name;
    let { validateInput } = formvalue[inputName];
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [inputName]: {
          ...prevFormValues[inputName],
          value: e.target.value,
          error: validateInput ? validateInput(e.target.value) : "",
        },
      };
    });
  };

  let checkButtonDisable = (value) => {
    for (const [key, objValue] of Object.entries(values)) {
      if (objValue.required && (objValue.error || !objValue.value)) {
        return true;
      }
    }
  };

  let clearForm = (obj) => {
    setFormValue(obj);
  };

  return {
    formvalues,
    setFormValues,
    onIpuntChange,
    clearForm,
    checkButtonDisable,
  };
};
