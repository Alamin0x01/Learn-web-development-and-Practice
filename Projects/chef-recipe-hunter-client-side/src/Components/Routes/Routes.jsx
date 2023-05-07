import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: async () => {
          try {
            const slideData = await fetch(
              "https://chef-recipe-hunter-server-side-snowy.vercel.app/slides"
            );
            const slides = await slideData.json();

            const chefsData = await fetch(
              "https://chef-recipe-hunter-server-side-snowy.vercel.app/chefs"
            );
            const chefs = await chefsData.json();

            return {
              slides: slides,
              chefs: chefs,
            };
          } catch (err) {
            console.log(err);
          }
        },
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms",
        element: <h2>Terms and Condition page coming soon...</h2>,
      },
      {
        path: "/chefRecipes/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-snowy.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
