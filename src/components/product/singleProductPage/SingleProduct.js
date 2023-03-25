import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  useProductLoading,
  useSingleProduct,
} from "../../../redux";
import { LoadingWrapper } from "../../shared";


const StyledSingleProduct = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr ",
  gridTemplateRows: "1fr ",
  marginBottom: 250,
}));

const StyledInfoProduct = styled(Box)(() => ({
  marginLeft: "20px",
}));

export const SingleProduct = ({}) => {
  const { state } = useLocation();

  const dispatch = useDispatch();

  const { categoryName } = useParams();

  const singleProduct = useSingleProduct();

  const isLoading = useProductLoading();

  useEffect(() => {
    dispatch(fetchSingleProduct({ id: state.id, category: categoryName }));
  }, [state.id]);

  return (
    <>
      <LoadingWrapper isLoading={isLoading}>
        <StyledSingleProduct>
          <img
            src={singleProduct?.image}
            alt={`${categoryName}`}
            style={{ objectFit: "cover", width: "100%", height: "500px" }}
          />
          <StyledInfoProduct>
            <h1>{singleProduct?.name}</h1>
            <h2> ფასი : {singleProduct?.price}₾</h2>
            <h3> კატეგორია : {singleProduct?.category}</h3>
            <h5> ბრენდი : {singleProduct?.brand}</h5>
          </StyledInfoProduct>
        </StyledSingleProduct>
      </LoadingWrapper>
    </>
  );
};
