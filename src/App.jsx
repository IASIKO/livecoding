import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Questions from "./pages/Questions";
import Answer from "./pages/Answer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Questions />,
    },
    {
      path: "/answer",
      element: <Answer />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
