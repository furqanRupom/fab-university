import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import { routesGenerator } from "../utils/routesGenerator";
import { AdminSidebarPaths } from "./admin.routes";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(AdminSidebarPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(FacultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(StudentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <About />,
  },
]);

export default router;
