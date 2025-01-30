import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <div>Not Found</div>,
    children: [{
        index: true,
        element: <Home></Home>
    }],
  },
]);
