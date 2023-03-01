export const generateRegistrationFormValue = () => {
  return {
    firstName: {
      value: "",
      required: true,
      error: "",
      validateInput: (firstName) =>
        firstName.length > 4 ? "" : "firstName must be at last 4 characters ",
    },

    lastName: {
      value: "",
      required: true,
      error: "",
      validateInput: (lastName) =>
        lastName.length > 4 ? "" : "lastName must be at last 4 characters ",
    },
    email: {
      value: "",
      required: true,
      error: "",
      validateInput: (email) =>
        email.includes("@gmail.com") ? "" : "email is not a valid",
    },

    password: {
      value: "",
      required: true,
      error: "",
      validateInput: (password) =>
        password.length > 8 ? null : " password must be at Last 8 Characters",
    },
  };
};
