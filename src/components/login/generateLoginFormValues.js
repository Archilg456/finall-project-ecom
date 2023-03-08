export const generateLoginFormValues = () => {
  return {
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
        password.length >= 8 ? null : " password must be at Last 8 Characters",
    },
  };
};
