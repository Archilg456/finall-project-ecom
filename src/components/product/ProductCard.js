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
import { Link, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { setSelectedProduct, useCartItems, useUserInfo } from "../../redux";
import { isUserAdmin } from "../../applications";
import { useNavigate } from "react-router-dom";
import { rateProduct } from "../../redux/slices/ProductSlice";

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
  const { name, price, image, category, _id, averageRating } = product;

  const cartItems = useCartItems();
  const isProductinCart = cartItems?.find((item) => item.product._id === _id);
  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const onAddtoCart = () => {
    dispatch(addToCart(product));
  };
  const onEdit = () => {
    navigate(`/products/edit${name}`);
    dispatch(setSelectedProduct(product));
  };

  const onRatingChange = (e) => {
    console.log(e.target.value);

    dispatch(
      rateProduct({
        productId: _id,
        userId: userInfo?._id,
        rating: +e.target.value,
        isHome: pathname === "/",
        url: `${category}${search}`,
      })
    );
  };

  return (
    <Grid item>
      <StyledCard>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/products/categories/${category}/${name}`}
          state={{ id: _id }}
        >
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
          <Rating
            onChange={onRatingChange}
            disabled={!userInfo}
            value={averageRating}
          />
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
