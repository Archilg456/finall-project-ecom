import "./App.css";
import { RoutesComponent } from "./Routes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  });

  return (
    <div className="App">
      <Link to="/"> Home </Link> <br />
      <Link to="/Login"> Login </Link> <br />
      <Link to="/register"> Registration </Link> <br />
      <Link to="/products/new"> Add Product </Link>  <br />
      <RoutesComponent />
    </div>
  );
}

export default App;
