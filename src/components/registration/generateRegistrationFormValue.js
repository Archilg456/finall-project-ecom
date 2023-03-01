export const generateRegistrationFormValue = () => {
  return {
    firstname: {
      value: "",
      required: true,
      error: "",
      validateInput: (firstname) =>
        firstname.length > 4 ? "" : "firstname must be at last 4 characters ",
    },

    lastname: {
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
