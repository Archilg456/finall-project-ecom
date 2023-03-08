import decode from "jwt-decode";

export const checkTokenValidity = (token) => {
  const expirationData = decode(token).exp;
  const isExpired = expirationData * 1000 < new Date().getTime();
  return isExpired;
};
