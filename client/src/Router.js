import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WikiBoardPage from "./components/pages/WikiBoardPage";
import NewWikiPostPage from "./components/pages/NewWikiPostPage";
import WikiDetailPage from "./components/pages/WikiDetailPage";
import WikiUpdatePage from "./components/pages/WikiUpdatePage";
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
      {
        path: "/:title",
        element: <WikiDetailPage />,
      },
      {
        path: "/update/:title",
        element: <WikiUpdatePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
