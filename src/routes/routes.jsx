import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/PublicPages/Home/Home";
import Gallery from "../pages/PublicPages/Gallery/Gallery";
import SingleFoodPage from "../pages/PublicPages/SingleFoodPage/SingleFoodPage";
import AllFoods from "../pages/PublicPages/AllFoods/AllFoods";
import MyFoods from "../pages/PrivatePages/MyFoods/MyFoods";
import PrivateRoute from "./PrivateRoute";
import FoodPurchase from "../pages/PrivatePages/FoodPurchase/FoodPurchase";
import MyOrders from "../pages/PrivatePages/MyOrders/MyOrders";
import AddFoods from "../pages/PrivatePages/AddFood/AddFoods";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "food/:id",
        element: <SingleFoodPage />,
      },
      {
        path: "/foods",
        element: <AllFoods />,
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/food-purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
