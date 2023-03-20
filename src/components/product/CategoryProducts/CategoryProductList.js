import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory, useCategoryProducts } from "../../../redux";
import { ProductCard } from "../ProductCard";
import { GridComponent } from "../../shared";

export const CategoryProductList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { products, totalPages } = useCategoryProducts();

  useEffect(() => {
    dispatch(
      fetchProductsByCategory(`${categoryName}?page=1&size=3&sort=price,desc}`)
    );
  }, [categoryName]);

  return (
    

    <Box>
              {categoryName}

      <GridComponent>
        {products?.map((product) => (
          <ProductCard id={product._id} product={product} />
        ))}
      </GridComponent>
    </Box>
  );
};
