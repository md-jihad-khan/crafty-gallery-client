import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-28 z-20 w-full">
        <Navbar></Navbar>
      </div>
      <div className="-z-10 ">
        <Outlet />
      </div>
    </>
  );
}

export default App;
