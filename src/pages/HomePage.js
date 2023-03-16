import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart, setSelectedProduct, useHomePageProducts } from "../redux";

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
          <Button
            sx={{ background: "green", color: "success" }}
            onClick={() => dispatch(addToCart(item))}
            variant="contained"
          >
            Add To Cart
          </Button>
          <Button
            sx={{ background: "green", color: "success", marginLeft: "1rem" }}
            onClick={() => dispatch(removeFromCart(item._id))}
            variant="contained"
          >
            Remove To Cart
          </Button>
          <Button
            sx={{ marginLeft: "1rem" }}
            onClick={() => onEdit(item)}
            variant="contained"
          >
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};
