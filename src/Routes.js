import React from "react";
import { Route, Routes } from "react-router-dom";
import { isUserAdmin, ProtectedRoute } from "./applications";
import {
  HomePage,
  AboutPage,
  LoginPage,
  RegistrationPage,
  PeoductFormPage,
  CategoryProductsPage,
} from "./pages";
import { useUserInfo } from "./redux";

export const RoutesComponent = () => {
  const userDate = useUserInfo();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route
        path="/products/new"
        element={
          <ProtectedRoute hasAccess={isUserAdmin(userDate)}>
            <PeoductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/edit:name"
        element={
          <ProtectedRoute hasAccess={isUserAdmin(userDate)}>
            <PeoductFormPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products/categories:categoryName"
        element={<CategoryProductsPage />}
      />
    </Routes>
  );
};
