import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AuthGuard } from "./auth/AuthGuard";

import { PostDetails } from "./pages/PostDetails";
import { Analystic } from "./pages/Analytics";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";

const DefultRouter = () => {
  const data = JSON.parse(localStorage.getItem("blog_rdata"));
  if (data) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefultRouter />,
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
          <Register />
        </AuthGuard>
      ),
    },
    {
      path: "/create-post",
      element: (
        <AuthGuard required={true}>
          <CreatePost />
        </AuthGuard>
      ),
    },
    {
      path: "/edit-post/:id",
      element: (
        <AuthGuard required={true}>
          <CreatePost />
        </AuthGuard>
      ),
    },
    {
      path: "/postDetail/:id",
      element: (
        <AuthGuard required={true}>
          <PostDetails />
        </AuthGuard>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      ),
    },
    {
      path: "/analytics",
      element: (
        <AuthGuard required={true}>
          <Analystic />
        </AuthGuard>
      ),
    },
    {
      path: "/favorites",
      element: (
        <AuthGuard required={true}>
          <Favorites />
        </AuthGuard>
      ),
    },
    // {
    //   path:"/editpost",
    //    element:(
    //     <AuthGuard required={true}>
    //       <Analystic  />
    //     </AuthGuard>
    //    )
    // },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHoverr
        theme="light"
      ></ToastContainer>
    </>
  );
}

export default App;
