import {
  Card,
  Grid,
  styled,
  Typography,
  Box,
  CardActions,
  Rating,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { setSelectedProduct, useCartItems, useUserInfo } from "../../redux";
import { isUserAdmin } from "../../applications";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(() => ({
  width: 350,
  borderRadius: 3,
}));

const StyledCardInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 10px",
}));

const StyledCardActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProductCard = ({ product }) => {
  const { name, price, image, category, _id } = product;

  const cartItems = useCartItems();
  const isProductinCart = cartItems?.find((item) => item.product._id === _id);
  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const onAddtoCart = () => {
    dispatch(addToCart(product));
  };
  const onEdit = () => {
    navigate(`/products/edit${name}`);
    dispatch(setSelectedProduct(product));
  };

  return (
    <Grid item>
      <StyledCard>
        <Link style={{ textDecoration: "none", color: "black" }}>
          <img
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "200px" }}
          />
          <StyledCardInfoContainer>
            <Typography>{name}</Typography>
            <Typography>{price}₾</Typography>
          </StyledCardInfoContainer>
        </Link>
        <CardActions>
          <Rating />
          <StyledCardActionsContainer>
            {isProductinCart ? (
              <>
                <Button onClick={() => dispatch(removeFromCart(_id))}>-</Button>
                <Typography> {isProductinCart.quantity} </Typography>
                <Button onClick={onAddtoCart}> + </Button>
              </>
            ) : (
              <Button
                onClick={() => onAddtoCart()}
                variant="contained"
                color="success"
                sx={{ marginLeft: "10x" }}
              >
                Add To Cart
              </Button>
            )}
            {isUserAdmin(userInfo) && (
              <Button
                onClick={onEdit}
                variant="contained"
                color="success"
                sx={{ marginLeft: "10px" }}
              >
                Edit
              </Button>
            )}
          </StyledCardActionsContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};
