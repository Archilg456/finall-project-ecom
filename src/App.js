import "./App.css";
import { RoutesComponent } from "./Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart, fetchHomePageProducts, useUserInfo } from "./redux";
import { Box, styled } from "@mui/material";
import { Header } from "./components/header";

const StyledContentConteiner = styled(Box)(() => ({
  padding: "0 0 0 37px",
  marginLeft: "225px",
  marginTop: "10rem",
  minHeight: "100vh",
}));

function App() {
  const dispatch = useDispatch();
  const userInfo = useUserInfo();

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
      <Header />

      <StyledContentConteiner>
        <RoutesComponent />
      </StyledContentConteiner>
    </Box>
  );
}

export default App;
