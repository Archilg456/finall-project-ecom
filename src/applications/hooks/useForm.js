import { useState } from "react";

export let useForm = ({ defaultFormValues }) => {
  let [formValues, setFormValues] = useState(defaultFormValues);
  let onInputChange = (e) => {
    let inputName = e.target.name;
    let { validateInput } = formValues[inputName];
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
    for (const [objValue] of Object.entries(value)) {
      if (objValue.required && (objValue.error || !objValue.value)) {
        return true;
      }
    }
  };
  let clearForm = (obj) => {
    setFormValues(obj);
  };

  return {
    formValues,
    setFormValues,
    onInputChange,
    clearForm,
    checkButtonDisable,
  };
};
