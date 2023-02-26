import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, LoginPage, RegistrationPage } from "./pages";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};
