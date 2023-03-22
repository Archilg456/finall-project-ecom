import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledSideBarHeader = styled(Box)(() => ({
  padding: "0px 15px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  fontSize: "3rem",
  fontFamily: "800",
  textDecoration: "none",
}));

export const SideBarHeader = () => {
  return (
    <StyledSideBarHeader>
      <Link to="/" style={{ textDecoration: "none", color: "#04623E" }}>
        DecorAll
      </Link>
    </StyledSideBarHeader>
  );
};
