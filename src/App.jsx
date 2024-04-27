import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-28 relative z-20 w-full">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
