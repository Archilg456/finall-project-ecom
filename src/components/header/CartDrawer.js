import { Drawer } from "@mui/material";
import React from "react";

export const CartDrawer = ({isCartOpen, setIsCartOpen, cartItems}) => {
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      <h1> Cart Product Empty</h1>
    </Drawer>
  );
};
