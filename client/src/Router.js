import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WikiBoardPage from "./components/pages/WikiBoardPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <WikiBoardPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
