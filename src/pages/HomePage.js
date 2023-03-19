import React from "react";
import { HomePageProducts } from "../components/product";
import { SideBar } from "../components/sidebar/sideBar";
export const HomePage = () => {
  return (
    <>
      <HomePageProducts />

      <SideBar />
    </>
  );
};
