import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import PropsExample from "./pages/PropsExample";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "props",
        element: <PropsExample />,
      },
      {
        path: "todos",
        element: <TodoPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
