import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AddCraft from "./pages/AddCraft.jsx";
import AllArtandCraft from "./pages/AllArtandCraft.jsx";
import SignleCraft from "./pages/SignleCraft.jsx";
import MyArtandCraft from "./pages/MyArtandCraft.jsx";
import UpdateCraft from "./pages/UpdateCraft.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtandCraft></AllArtandCraft>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/craft/:id",
        element: <SignleCraft></SignleCraft>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/myArtAndCraft",
        element: <MyArtandCraft></MyArtandCraft>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
