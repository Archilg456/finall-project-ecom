import React from "react";
import { useHomePageProducts, useProductLoading } from "../../redux";
import { GridComponent, LoadingWrapper } from "../shared";
import { ProductCard } from "./ProductCard";

export const HomePageProducts = () => {
  const HomePageProducts = useHomePageProducts();
  const isLoading = useProductLoading();

  return (
    <LoadingWrapper isLoading={isLoading}>
      <GridComponent>
        {HomePageProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </GridComponent>
    </LoadingWrapper>
  );
};
