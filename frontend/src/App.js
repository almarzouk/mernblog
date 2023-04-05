import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Topbar />
        <Outlet />
      </div>
    );
  };
  const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: user ? <Home /> : <Register />,
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />,
        },
        {
          path: "/write",
          element: user ? <Write /> : <Register />,
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Register />,
        },
        {
          path: "/post/:postId",
          element: <Single />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
