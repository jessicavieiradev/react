import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="space-y-5">
      <NavBar />
      <h1 className="text-3xl text-orange-600">pagina principal</h1>
      <Outlet />
    </div>
  );
}

export default App;
