import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardSetting from "./pages/dashboard/DashboardSetting";
import Default from "./pages/layouts/Default";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import Post from "./post/Post";
import PostDetail from "./post/PostDetail";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/:locale?/about",
        element: <About />,
      },
      { path: "/post/*", Component: Post },
      { path: "/post/:id/detail/:detail", Component: PostDetail },
      {
        path: "/group",
        // Component: DashboardLayout,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
            children: [
              {
                // path: "", // /dashboard
                index: true, // 인덱스 라우트 == path:""와 동일
                Component: DashboardHome,
              },
              {
                // children 속성은 / 기재하지 않음
                path: "setting", // /dashboard/setting
                Component: DashboardSetting,
                children: [
                  {
                    path: "custom", // /dashboard/setting/custom
                    element: <h1>DashboardSetting Home</h1>,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <h1>404 Not Fount!</h1>,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
