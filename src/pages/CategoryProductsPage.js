import React from "react";
import { CategoryProductList } from "../components/product/CategoryProducts/CategoryProductList";
import { SideBar } from "../components/sidebar/sideBar";

export const CategoryProductsPage = () => {
  return (
    <>
      <SideBar />
    <CategoryProductList />

    </>
  );
};
