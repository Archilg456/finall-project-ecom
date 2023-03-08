import "./App.css";
import { RoutesComponent } from "./Routes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { axiosInstance } from "./applications";

function App() {
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then(({ data }) => console.log("data", data));
  }, []);

  return (
    <div className="App">
      <Link to="/"> Home </Link> <br />
      <Link to="/Login"> Login </Link> <br />
      <Link to="/register"> Registration </Link> <br />
      <RoutesComponent />
    </div>
  );
}

export default App;
