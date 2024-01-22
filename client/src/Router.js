import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WikiBoardPage from "./components/pages/WikiBoardPage";
import NewWikiPostPage from "./components/pages/NewWikiPostPage";
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
      {
        path: "/write",
        element: <NewWikiPostPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
