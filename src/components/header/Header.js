import { AppBar, Badge, Box, Button, styled, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "../../redux";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { FcHome, FcShop } from "react-icons/fc";

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

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    width: "20px",
    heigth: "21px",
    color: "#fff",
    background: "#F33451",
    top: "2px",
    right: "-3px",
  },
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartItems();

  const cartItemsQuantity = cartItems?.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="/">
            <FcHome size={40} />
          </Link>
          <SearchBar />
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)} sx={{ color: "#fff" }}>
            <StyledBadge badgeContent={cartItemsQuantity}>
              <FcShop size={40} />
            </StyledBadge>
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
