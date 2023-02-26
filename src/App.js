import "./App.css";
import { RoutesComponent } from "./Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/registration"> Registration </Link>
      <Link to="/Login"> Login </Link>
      <RoutesComponent />
      <Link to="/"> Home </Link>
    </div>
  );
}

export default App;
