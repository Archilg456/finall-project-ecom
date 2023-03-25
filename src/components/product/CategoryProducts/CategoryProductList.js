import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductsByCategory,
  useCategoryProducts,
  useProductLoading,
} from "../../../redux";
import { ProductCard } from "../ProductCard";
import { GridComponent, LoadingWrapper } from "../../shared";
import { useQueryParams } from "../../../applications";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";

const StyledCategoryName = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "2rem",
  margin: "4rem",
}));

export const CategoryProductList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { products, totalPages } = useCategoryProducts();
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");

  useEffect(() => {
    dispatch(
      fetchProductsByCategory(
        `${categoryName}?page=${page}&size=1&sort=${sort}}`
      )
    );
  }, [categoryName, page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  const isLoading = useProductLoading();

  return (
    <Box>
      <LoadingWrapper isLoading={isLoading}>
        <StyledCategoryName>{categoryName}</StyledCategoryName>

        <Sort value={sort} changeSort={changeSort} />

        <GridComponent>
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </GridComponent>
        <StyledCategoryName>
          <Paginate
            totalPages={totalPages}
            currentPage={page}
            changePage={changePage}
          />
        </StyledCategoryName>
      </LoadingWrapper>
    </Box>
  );
};
