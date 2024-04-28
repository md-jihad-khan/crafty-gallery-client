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
import CategoryCrafts from "./pages/CategoryCrafts.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Privateroute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: (
          <Privateroute>
            <AddCraft></AddCraft>
          </Privateroute>
        ),
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtandCraft></AllArtandCraft>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER}crafts`),
      },
      {
        path: "/craft/:id",
        element: (
          <Privateroute>
            <SignleCraft></SignleCraft>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER}craft/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <Privateroute>
            <UpdateCraft></UpdateCraft>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER}craft/${params.id}`),
      },
      {
        path: "/category/:name",
        element: <CategoryCrafts></CategoryCrafts>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER}category/${params.name}`),
      },
      {
        path: "/myArtAndCraft",
        element: (
          <Privateroute>
            <MyArtandCraft></MyArtandCraft>
          </Privateroute>
        ),
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
