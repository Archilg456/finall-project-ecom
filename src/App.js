import "./App.css";
import { RoutesComponent } from "./Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux";
import { Box, styled } from "@mui/material";
import { Header } from "./components/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  });
  
  const StyledContentConteiner = styled(Box)(() => ({
    padding: "0 0 0 37px0",
    width: "calc(100% - 225px",
    marginLeft: "225px",
    margintop: "100px",
    minHeight: "100vh",
  }));

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
