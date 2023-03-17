import React from "react";
import { useHomePageProducts } from "../../redux";
import { GridComponent } from "../shared";
import { ProductCard } from "./ProductCard";

export const HomePageProducts = () => {
  const HomePageProducts = useHomePageProducts();

  return (
    <GridComponent>
      {HomePageProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </GridComponent>
  );
};
