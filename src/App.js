import "./App.css";
import { RoutesComponent } from "./Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/"> Home </Link> <br/>
      <Link to="/Login"> Login </Link> <br/>
      <Link to="/register"> Registration </Link> <br/>
      
      <RoutesComponent />

    </div>
  );
}

export default App;
