import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-28 z-20 w-full">
        <Navbar></Navbar>
      </div>

      <Home></Home>
      <Outlet />
    </>
  );
}

export default App;
