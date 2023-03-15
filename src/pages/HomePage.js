import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct, useHomePageProducts } from "../redux";

export const HomePage = () => {
  const products = useHomePageProducts();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onEdit = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/products/edit${product.name}`);
  };

  return (
    <div>
      {products.map((item) => (
        <div key={item._id}>
          <h1> {item.name} </h1>
          <Button onClick={() => onEdit(item)} variant="contained">
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};
