import React from "react";
import { FiNavigation, FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Box, styled } from "@mui/material";

const StyledFooterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "255px",
    height: 420,
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
    gridTemplateRows: "1fr 1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    height: 420,
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
    gridTemplateRows: "1fr 1fr 1fr",
  },
}));
const StyledInfoContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "grid",
    maxWidth: "100%",
    width: "430px",
    gridTemplateColumns: "1fr 1fr ",
    gridTemplateRows: "1fr 1fr 1fr",
    gridGap: "20px",
    padding: "5px",
    whiteSpace: "nowrap",
    color: "#42826CFF",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    maxWidth: "100%",
    width: "380px",
    gridTemplateColumns: "1fr 1fr ",
    gridTemplateRows: "1fr 1fr 1fr",
    gridGap: "20px",
    marginLeft: "-28px",
    whiteSpace: "nowrap",
    fontSize: "12px",
    color: "#42826CFF",
  },
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    maxWidth: "100%",
    width: "380px",
    gridTemplateColumns: "1fr 1fr ",
    gridTemplateRows: "1fr 1fr 1fr",
    gridGap: "20px",
    marginLeft: "10px",
    whiteSpace: "nowrap",
    fontSize: "12px",
    color: "#42826CFF",
  },
}));
const StyledLogoContainer = styled(Box)(() => ({
  color: "#42826CFF",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)",
}));

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <Box>
        <StyledLogoContainer>
          <h1> DecorAll </h1>
        </StyledLogoContainer>
        <StyledInfoContainer>
          <FiNavigation size={40} />
          <h3>მის : დიდი დიღომი არჩილ მეფის 10</h3>

          <FiPhone size={40} />
          <h3> ტელ : 995 555 11 22 33</h3>

          <AiOutlineMail size={40} />
          <h3>Email : decorall@gmail.com</h3>
        </StyledInfoContainer>
      </Box>
    </StyledFooterContainer>
  );
};
