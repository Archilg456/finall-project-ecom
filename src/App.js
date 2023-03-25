import "./App.css";
import { RoutesComponent } from "./Routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCart, fetchHomePageProducts, useUserInfo } from "./redux";
import { Header } from "./components/header";
import { SideBar } from "./components/sidebar/sideBar";
import { Box, styled } from "@mui/material";
import { Footer } from "./components/Footer/Footer";

const StyledContentContainer = styled(Box)(() => ({
  padding: "0 0 0 37px",
  marginLeft: "225px",
  marginTop: "10rem",
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

  return (
    <Box>
      <Header setDrawerOpen={setDrawerOpen} />
      <StyledContentContainer>
        <RoutesComponent />
      </StyledContentContainer>
      <SideBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Footer />
    </Box>
  );
}

export default App;
