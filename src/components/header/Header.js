import { AppBar, Box, Button, styled, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "../../redux";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";

const StyledAppBar = styled(AppBar)(() => ({
  color: "#fff",
  width: "calc(100% - 225px)",
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartItems();

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="/"> Home</Link>
          <SearchBar />
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)} sx={{ color: "#fff" }}>
            Cart
          </Button>
          <CartDrawer
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            cartItems={cartItems}
          />
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};
