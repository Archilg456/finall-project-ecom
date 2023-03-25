import React from "react";
import { FiNavigation, FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import GoogleMapReact from "google-map-react";
import { Box, styled } from "@mui/material";

const StyledFooterContainer = styled(Box)(() => ({
  marginLeft: "255px",
  height: 420,
  display: "grid",
  gridTemplateColumns: "1fr 1fr ",
  gridTemplateRows: "1fr 1fr 1fr",
}));
const StyledInfoContainer = styled(Box)(() => ({
  display: "grid",
  maxWidth: "100%",
  width: "430px",
  gridTemplateColumns: "1fr 1fr ",
  gridTemplateRows: "1fr 1fr 1fr",
  gridGap: "20px",
  padding: "5px",
  whiteSpace: "nowrap",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)",
}));
const StyledLogoContainer = styled(Box)(() => ({
  color: "#42826CFF",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.24)",
}));

const defaultProps = {
  center: {
    lat: 41.727436,
    lng: 44.762967,
  },
  zoom: 11,
};
const AnyReactComponent = ({ Addres }) => <div>{Addres}</div>;

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

      <Box
        sx={{
          paddingTop: 10,
          width: 650,
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={41.727436} lng={44.762967} text="Address" />
        </GoogleMapReact>
      </Box>
    </StyledFooterContainer>
  );
};
