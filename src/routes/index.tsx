import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardSetting from "./pages/dashboard/DashboardSetting";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post",
    element: <h1>Post Page</h1>,
  },
  {
    path: "/dashboard",
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
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
