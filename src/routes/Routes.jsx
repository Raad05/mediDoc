import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Dynamic/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
