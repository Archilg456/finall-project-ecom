import "./App.css";
import { RoutesComponent } from "./Routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCart, fetchHomePageProducts, useUserInfo } from "./redux";
import { Box, styled } from "@mui/material";
import { Header } from "./components/header";
import { SideBar } from "./components/sidebar/sideBar";
import {  FiNavigation, FiPhone } from "react-icons/fi";
import {  AiOutlineMail} from "react-icons/ai";
import GoogleMapReact from 'google-map-react';

const StyledContentConteiner = styled(Box)(() => ({
  padding: "0 0 0 37px",
  marginLeft: "225px",
  marginTop: "10rem",
}));
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





function App() {
  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCart(userInfo._id));
    }
  }, [userInfo]);

  const defaultProps = {
    center: {
      lat: 41.727436,
      lng: 44.762967,
    },
    zoom: 11
  };
  const AnyReactComponent = ({ Addres }) => <div>{Addres}</div>;

  return (
    <Box>
      <Header setDrawerOpen={setDrawerOpen} />

      <StyledContentConteiner>
        <SideBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <RoutesComponent />
      </StyledContentConteiner>
      <StyledFooterContainer>
       <Box>
        <StyledLogoContainer>
        <h1> DecorAll </h1>
        </StyledLogoContainer>
        <StyledInfoContainer>
        <FiNavigation size={40} /> 
        <h3>მის : დიდი დიღომი არჩილ მეფის 10</h3>

        <FiPhone size={40}/>
        <h3> ტელ : 995 555 11 22 33</h3>

        <AiOutlineMail size={40}/> 
        <h3>Email :  decorall@gmail.com</h3>
        </StyledInfoContainer>
       </Box>

       <Box sx={{
          paddingTop: 10,
          width: 650,
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>  
      
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
          lat={41.727436}
          lng={44.762967}
          text="Address"
        />
        </GoogleMapReact>

       </Box>
    
      </StyledFooterContainer>
    </Box>
  );
}

export default App;
