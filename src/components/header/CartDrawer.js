import { Box, Button, Drawer, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart, saveCart, useUserInfo } from "../../redux";

const StyledBox = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginTop: 35,
}));

const StyledCartButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const CartDrawer = ({ isCartOpen, setIsCartOpen, cartItems }) => {
  const userInfo = useUserInfo(); 
  const dispatch = useDispatch();

  const onSaveCart = (isClear) => {
    dispatch(
      saveCart({ userId: userInfo?._id, cartItems: isClear ? [] : cartItems })
    );
  };
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledBox key={_id}>
            <img
              src={image}
              alt={`${name}-img`}
              width="70px"
              height="70px"
              style={{ objectFit: "cover", borderRadius: 5 }}
            />
            <Box sx={{ paddingLeft: 2 }}>
              <Typography> {name} </Typography>
              <Typography> რაოდენობა: {quantity} </Typography>
              <Typography> Total: ₾{price * quantity} </Typography>
            </Box>
          </StyledBox>
        );
      })}

      <StyledCartButtonContainer>
        <Button
          onClick={() => {
            dispatch(clearCart());
            onSaveCart(true);
          }}
        >
          Clear Cart
        </Button>

        {!!userInfo && (
          <Button onClick={() => onSaveCart(false)}> Save Cart </Button>
        )}
      </StyledCartButtonContainer>
    </Drawer>
  );
};
