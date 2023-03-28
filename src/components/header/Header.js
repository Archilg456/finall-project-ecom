import { AppBar, Badge, Box, Button, styled, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "../../redux";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { FcHome, FcShop } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#42826CFF",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 225px)",
  },
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: "-3px",
    backgroundColor: "red",
    color: "white",
  },
}));

export const Header = ({ setDrawerOpen }) => {
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
          <Button
            onClick={() => setDrawerOpen((prevState) => !prevState)}
            sx={{ display: { sm: "none" }, marginRight: "1rem" }}
          >
            <GiHamburgerMenu size={35} color="black" />
          </Button>

          <Link to="/">
            <FcHome size={40} />
          </Link>
          <SearchBar />
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)}>
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
