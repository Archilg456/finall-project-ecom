import { AppBar, Box, Button, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";

export const Header = () => {
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

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="/"> Home</Link>
          <SearchBar />
          <UserIcon />
          <Button sx={{ color: "#fff" }}> Cart </Button>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};
