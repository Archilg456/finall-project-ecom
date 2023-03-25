import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProduct, useSingleProduct } from "../../../redux";

const StyledSingleProduct = styled(Box)(() => ({
  display: "grid",
}));

export const SingleProduct = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();

  const { categoryName } = useParams();

  const singleProduct = useSingleProduct();



  useEffect(() => {
    dispatch(fetchSingleProduct({ id: state.id, category: categoryName }));
  }, [state.id]);

  return (
    <>
      <StyledSingleProduct>
        <h1>{singleProduct?.name}</h1>
        <h2>{singleProduct?.price}₾</h2>
      </StyledSingleProduct>
    </>
  );
};
